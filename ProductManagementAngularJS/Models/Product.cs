#region using
using System.Collections.Generic;
#endregion

namespace ProductManagementAngularJS.Models
{
    public class Product
    {
        public int ProductId { get; set; }

        public string ProductName { get; set; }

        public string ProductCode { get; set; }

        public string ReleaseDate { get; set; }

        public string Description { get; set; }

        public double Cost { get; set; }

        public double Price { get; set; }

        public string Category { get; set; }

        public List<string> Tags { get; set; }

        public string ImageUrl { get; set; }
    }
}