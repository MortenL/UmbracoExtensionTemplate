using System.ComponentModel.DataAnnotations;

namespace MySite.BackofficeExtension.Core.Models
{
    public class MyDataModel
    {
        public int Id { get; set; }
        
        [Required]
        public string? Name { get; set; }
        
        public string? Description { get; set; }
        
        public bool IsActive { get; set; }
        
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
    }
}
