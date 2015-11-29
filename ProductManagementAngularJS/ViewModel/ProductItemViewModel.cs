using ProductManagementAngularJS.Models;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace ProductManagementAngularJS.ViewModel
{
    /// <summary>
    /// Exposer les propriétés nécessaires d'un produit à la vue
    /// </summary>
    [DataContract]
    public class ProductItemViewModel
    {
        #region Properties
        [DataMember(Name = "productCode")]
        public string ProductCode { get; set; }

        [DataMember(Name = "productName")]
        public string ProductName { get; set; }

        [DataMember(Name = "available")]
        public string Available { get; set; }

        [DataMember(Name = "description")]
        public string Description { get; set; }

        [DataMember(Name = "cost")]
        public double Cost { get; set; }

        [DataMember(Name = "price")]
        public double Price { get; set; }

        [DataMember(Name = "category")]
        public string Category { get; set; }

        [DataMember(Name = "tags")]
        public List<string> Tags { get; set; }

        [DataMember(Name = "imageUrl")]
        public string ImageUrl { get; set; }
        #endregion

        #region Constructor
        public ProductItemViewModel() { }

        public ProductItemViewModel(Product prd)
        {
            ProductCode = prd.ProductCode;
            ProductName = prd.ProductName;
            Available = prd.ReleaseDate;
            Description = prd.Description;
            Cost = prd.Cost;
            Price = prd.Price;
            Category = prd.Category;
            Tags = prd.Tags;
            ImageUrl = prd.ImageUrl;
        }
        #endregion
    }
}