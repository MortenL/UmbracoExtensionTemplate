using Microsoft.Extensions.DependencyInjection;
using MySite.BackofficeExtension.Core.Services;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;

namespace MySite.BackofficeExtension.Core.Composers
{
    public class BackofficeExtensionComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            // Register our services
            builder.Services.AddScoped<IMyService, MyService>();
            
            // You can also configure other Umbraco services here if needed
        }
    }
}
