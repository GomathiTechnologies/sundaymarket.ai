import { createBrowserRouter } from "react-router";
import { VendorWelcome } from "./components/VendorWelcome";
import { DetectMarket } from "./components/DetectMarket";
import { VendorProfile } from "./components/VendorProfile";
import { CreateMarketDay } from "./components/CreateMarketDay";
import { UploadPhotos } from "./components/UploadPhotos";
import { AIScanProgress } from "./components/AIScanProgress";
import { ScanResults } from "./components/ScanResults";
import { CatalogReview } from "./components/CatalogReview";
import { ProductEdit } from "./components/ProductEdit";
import { PublishStore } from "./components/PublishStore";
import { CustomerMarketHome } from "./components/CustomerMarketHome";
import { VendorStorePage } from "./components/VendorStorePage";
import { ProductDetail } from "./components/ProductDetail";
import { MultiVendorCart } from "./components/MultiVendorCart";
import { OrderConfirmation } from "./components/OrderConfirmation";
import { VendorOrders } from "./components/VendorOrders";
import { EventClosed } from "./components/EventClosed";
import { VoiceSearchListening } from "./components/VoiceSearchListening";
import { AIShoppingListResults } from "./components/AIShoppingListResults";
import { PickupRouteMap } from "./components/PickupRouteMap";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: VendorWelcome,
  },
  {
    path: "/vendor/detect-market",
    Component: DetectMarket,
  },
  {
    path: "/vendor/profile",
    Component: VendorProfile,
  },
  {
    path: "/vendor/create-market-day",
    Component: CreateMarketDay,
  },
  {
    path: "/vendor/upload-photos",
    Component: UploadPhotos,
  },
  {
    path: "/vendor/ai-scan-progress",
    Component: AIScanProgress,
  },
  {
    path: "/vendor/scan-results",
    Component: ScanResults,
  },
  {
    path: "/vendor/catalog-review",
    Component: CatalogReview,
  },
  {
    path: "/vendor/product-edit/:id",
    Component: ProductEdit,
  },
  {
    path: "/vendor/publish",
    Component: PublishStore,
  },
  {
    path: "/vendor/orders",
    Component: VendorOrders,
  },
  {
    path: "/vendor/event-closed",
    Component: EventClosed,
  },
  {
    path: "/market",
    Component: CustomerMarketHome,
  },
  {
    path: "/market/vendor/:vendorId",
    Component: VendorStorePage,
  },
  {
    path: "/market/product/:productId",
    Component: ProductDetail,
  },
  {
    path: "/cart",
    Component: MultiVendorCart,
  },
  {
    path: "/order-confirmation",
    Component: OrderConfirmation,
  },
  {
    path: "/voice-search",
    Component: VoiceSearchListening,
  },
  {
    path: "/voice-results",
    Component: AIShoppingListResults,
  },
  {
    path: "/pickup-route",
    Component: PickupRouteMap,
  },
]);
