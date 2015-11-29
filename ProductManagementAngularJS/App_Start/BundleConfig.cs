using System.Web.Optimization;

namespace ProductManagementAngularJS
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            // Bundle pour angular libraires
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/bower_components/angular/angular.js",
                        "~/bower_components/angular-ui-router/release/angular-ui-router.js",
                        "~/bower_components/angular-ui-mask/dist/mask.js",
                        "~/bower_components/angular-bootstrap/ui-bootstrap.js",
                        "~/bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
                        "~/bower_components/d3/d3.js",
                        "~/bower_components/angular-charts/dist/angular-charts.js"));

            // Bundle pour angular application
            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                        "~/Scripts/app/app.js",
                        "~/Scripts/app/products/productList/productList.factory.js",
                        "~/Scripts/app/products/productList/productList.controller.js",
                        "~/Scripts/app/images/image.controller.js",
                        "~/Scripts/app/products/productDetail/productDetail.factory.js",
                        "~/Scripts/app/products/productDetail/productDetail.controller.js",
                        "~/Scripts/app/products/productEdit/productEdit.factory.js",
                        "~/Scripts/app/products/productEdit/productEdit.controller.js",
                        "~/Scripts/app/prices/priceChart.factory.js",
                        "~/Scripts/app/prices/priceChart.controller.js"));

            // Bundle pour angular css
            bundles.Add(new StyleBundle("~/bundles/master").Include(
                "~/Content/css/app.css",
                "~/bower_components/bootstrap/dist/css/bootstrap.css"));
        }
    }
}