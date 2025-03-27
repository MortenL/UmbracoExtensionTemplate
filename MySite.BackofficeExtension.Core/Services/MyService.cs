using Microsoft.Extensions.Logging;
using MySite.BackofficeExtension.Core.Models;
using Umbraco.Cms.Core;

namespace MySite.BackofficeExtension.Core.Services
{
    public class MyService(ILogger<MyService> logger) : IMyService
    {
        private readonly ILogger<MyService> _logger = logger;
        private static readonly List<MyDataModel> _inMemoryData =
        [
            new MyDataModel { Id = 1, Name = "Item 1", Description = "Description 1", IsActive = true, CreatedDate = DateTime.UtcNow.AddDays(-1) },
            new MyDataModel { Id = 2, Name = "Item 2", Description = "Description 2", IsActive = false, CreatedDate = DateTime.UtcNow.AddDays(-2) }
        ];

        public Task<IEnumerable<MyDataModel>> GetDataAsync()
        {
            _logger.LogInformation("Getting data from service");
            return Task.FromResult<IEnumerable<MyDataModel>>(_inMemoryData);
        }

        public Task<MyDataModel?> GetByIdAsync(int id)
        {
            _logger.LogInformation("Getting data with id {Id}", id);
            var item = _inMemoryData.FirstOrDefault(x => x.Id == id);
            return Task.FromResult(item);
        }

        public async Task<Attempt<OperationStatus>> SaveDataAsync(MyDataModel data)
        {
            _logger.LogInformation("Saving data: {Name}", data.Name);
            
            try
            {
                if (data.Id > 0)
                {
                    // Update existing item
                    var existingItem = _inMemoryData.FirstOrDefault(x => x.Id == data.Id);
                    if (existingItem != null)
                    {
                        existingItem.Name = data.Name;
                        existingItem.Description = data.Description;
                        existingItem.IsActive = data.IsActive;
                    }
                    else
                    {
                        _logger.LogWarning("Item with ID {Id} not found for update", data.Id);
                        return Attempt.Fail(OperationStatus.FailedUpdate);
                    }
                }
                else
                {
                    // Add new item
                    data.Id = _inMemoryData.Count > 0 ? _inMemoryData.Max(x => x.Id) + 1 : 1;
                    _inMemoryData.Add(data);
                }
                return Attempt.Succeed(OperationStatus.Success);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error saving data");
                return Attempt.Fail(OperationStatus.FailedUpdate);
            }
        }
    }
}
