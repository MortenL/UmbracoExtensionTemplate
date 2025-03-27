using MySite.BackofficeExtension.Core.Models;
using Umbraco.Cms.Core;

namespace MySite.BackofficeExtension.Core.Services
{
    public interface IMyService
    {
        Task<IEnumerable<MyDataModel>> GetDataAsync();
        Task<Attempt<OperationStatus>> SaveDataAsync(MyDataModel data);
        Task<MyDataModel?> GetByIdAsync(int id);
    }
}
