import { defineStore } from "pinia";
import { toast } from "vue3-toastify";

export const productStore = defineStore("cart", {
  state: () => ({
    product: [],
    fav : []
  }),
  persist: true,
  actions: {
    addToCart(items) {
      const exs = this.product.find((x) => x.id === items.id);
      if (exs) {
        exs.qty += 1;
        toast.success("Item Quantity Updated");
      } else {
        this.product.unshift({
          title: items.title,
          id: items.id, 
          image: items.image,
          price: items.price,
          qty: items.qty,
        });
        toast.success("Item Added To Cart");
        console.log(items.price)
      }
    },
    increaseQty(id) {
      const prod = this.product.find((item) => item.id === id);
      if (prod && prod.qty < 10) {
        prod.qty += 1;
      } else {
        toast.success("Limit Reached");
      }
    },
    decreaseQty(id) {
      const prod = this.product.find((item) => item.id === id);
      if (prod) {
        if (prod.qty > 1) {
          prod.qty -= 1;
        } else {
          this.removeItem(id);
        }
      }
    },
    removeItem(id) {
      this.product = this.product.filter((item) => item.id !== id);
      toast.success("Item Removed From Cart");
    },
    addToFav(items){
      const exs = this.fav.find((x) => x.id === items.id);  
      if(exs){
        toast.info("AlReady Added To Your WishList ❤️")
        return;
      }else{
        this.fav.unshift({
          title: items.title,
          id: items.id, 
          image: items.image,
          price: items.price,
          qty : items.qty
        })
        toast.success("Item Added to WishList ❤️")
      }
    },
    removeFav(id){
      this.fav = this.fav.filter((item)=> item.id !== id)
      toast.success("Item Removed From WishList");
    }
  },
});
