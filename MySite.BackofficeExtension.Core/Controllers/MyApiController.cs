using Microsoft.AspNetCore.Mvc;
using MySite.BackofficeExtension.Core.Models;
using MySite.BackofficeExtension.Core.Services;
using Umbraco.Cms.Api.Management.Routing;
using Umbraco.Cms.Api.Common.Attributes;
using Microsoft.AspNetCore.Authorization;
using Umbraco.Cms.Web.Common.Authorization;

namespace MySite.BackofficeExtension.Core.Controllers
{
    [VersionedApiBackOfficeRoute(Constants.ApiName)]
    [MapToApi(Constants.ApiName)]
    [Authorize(Policy = AuthorizationPolicies.SectionAccessSettings)]
    public class MyApiController(IMyService myService) : ApiControllerBase
    {
        private readonly IMyService _myService = myService;

        [HttpGet]
        public async Task<IActionResult> GetData()
        {
            var result = await _myService.GetDataAsync();
            return new OkObjectResult(result);
        }
        
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _myService.GetByIdAsync(id);
            if (result == null)
            {
                return NotFound();
            }
            
            return new OkObjectResult(result);
        }
        
        [HttpPost]
        public async Task<IActionResult> SaveData([FromBody] MyDataModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var result = await _myService.SaveDataAsync(model);
            return OperationStatusResult(result.Result);
        }
    }
}
