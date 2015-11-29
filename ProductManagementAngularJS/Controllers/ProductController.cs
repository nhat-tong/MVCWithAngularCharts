#region using
using ProductManagementAngularJS.Models;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Linq;
using ProductManagementAngularJS.ViewModel;
using System.Web.Http.Controllers;
#endregion

namespace ProductManagementAngularJS.Controllers
{
    public class ProductController : ApiController
    {
        #region Properties
        // Save to Xml or Database for persist data
        private static List<Product> _productList = null;
        #endregion

        #region Constructor
        protected override void Initialize(HttpControllerContext controllerContext)
        {
            _productList = GetProductsData();
            base.Initialize(controllerContext);
        }
        #endregion

        #region GetProducts
        /// <summary>
        /// Récupérer liste des produits
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public HttpResponseMessage GetProducts()
        {
            return Request.CreateResponse(HttpStatusCode.OK, _productList.Select(x => new ProductItemViewModel(x)));
        }
        #endregion

        #region GetProductsData
        /// <summary>
        /// Récupérer liste des produits
        /// </summary>
        /// <returns></returns>
        private List<Product> GetProductsData()
        {
             return new List<Product>
            {
               new Product {
                ProductId = 1,
                ProductName = "Leaf Rake",
                ProductCode = "GDN-0011",
                ReleaseDate = "March 19, 2009",
                Description = "Leaf rake with 48-inch wooden handle.",
                Cost = 9.00,
                Price = 19.95,
                Category = "garden",
                Tags = new List<string> {"leaf", "tool" },
                ImageUrl = "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            new Product {
                ProductId = 2,
                ProductName = "Garden Cart",
                ProductCode = "GDN-0023",
                ReleaseDate = "March 18, 2010",
                Description = "15 gallon capacity rolling garden cart",
                Cost = 20.00,
                Price = 32.99,
                Category = "garden",
                Tags = new List<string> {"barrow", "cart", "wheelbarrow" },
                ImageUrl = "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            new Product {
                ProductId = 5,
                ProductName = "Hammer",
                ProductCode = "TBX-0048",
                ReleaseDate = "May 21, 2013",
                Description = "Curved claw steel hammer",
                Cost = 1.00,
                Price = 8.99,
                Category = "toolbox",
                Tags = new List<string> {"tool" },
                ImageUrl = "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            },
            new Product {
                ProductId  = 8,
                ProductName = "Saw",
                ProductCode = "TBX-0022",
                ReleaseDate = "May 15, 2009",
                Description = "15-inch steel blade hand saw",
                Cost = 6.95,
                Price = 11.55,
                Category = "garden",
                Tags = new List<string> { "garden", "mower" },
                ImageUrl = "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
            },
            new Product {
                ProductId = 10,
                ProductName = "Video Game Controller",
                ProductCode = "GMG-0042",
                ReleaseDate = "October 15, 2002",
                Description = "Standard two-button video game controller",
                Cost = 2.22,
                Price = 35.95,
                Category = "gaming",
                Tags = new List<string> { "gaming", "controller", "video game" },
                ImageUrl = "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
            }};
        }
        #endregion

        #region GetImage
        /// <summary>
        /// Récupérer les données binaires correspondantes à l'url passée
        /// </summary>
        /// <param name="url"></param>
        /// <returns></returns>
        [HttpGet]
        public HttpResponseMessage GetImage(string url)
        {
            byte[] imageData = null;

            using (var wc = new WebClient())
            {
                imageData = wc.DownloadData(url);
            }

            return Request.CreateResponse(HttpStatusCode.OK, new MemoryStream(imageData));
        }
        #endregion

        #region GetProductById
        /// <summary>
        /// Récupérer le produit détaillé
        /// </summary>
        /// <param name="productCode"></param>
        /// <returns></returns>
        public HttpResponseMessage GetProductDetail(string productCode)
        {
            return Request.CreateResponse(HttpStatusCode.OK, new ProductItemViewModel(_productList.FirstOrDefault(p => p.ProductCode == productCode)));
        }
        #endregion

        #region SaveProduct
        /// <summary>
        /// Sauvegarder les infos du produit
        /// </summary>
        /// <param name="vm"></param>
        /// <returns></returns>
        [HttpPost]
        public HttpResponseMessage SaveProduct(ProductItemViewModel vm)
        {
            var productExist = _productList.FirstOrDefault(p => p.ProductCode == vm.ProductCode);
            if(productExist == null)
            {
                _productList.Add(new Product
                {
                    ProductCode = vm.ProductCode,
                    ProductName = vm.ProductName,
                    Description = vm.Description,
                    Category = vm.Category,
                    Cost = vm.Cost,
                    Price = vm.Price,
                    ReleaseDate = vm.Available,
                    Tags = vm.Tags
                });
            }
            else
            {
                productExist.ProductCode = vm.ProductCode;
                productExist.ProductName = vm.ProductName;
                productExist.Description = vm.Description;
                productExist.Category = vm.Category;
                productExist.Cost = vm.Cost;
                productExist.Price = vm.Price;
                productExist.ReleaseDate = vm.Available;
                productExist.Tags = vm.Tags;
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }
        #endregion
    }
}
