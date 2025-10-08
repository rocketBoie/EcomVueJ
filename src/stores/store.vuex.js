import { createStore } from 'vuex';
import { toast } from 'vue3-toastify';

const store = createStore({
  state: {
    product: [],
    fav: [],
    len: 0,
    wish: 0,
  },
  mutations: {
    addToCart(state, items) {
      const exs = state.product.find((x) => x.id === items.id);
      if (exs) {
        exs.qty += 1;
        toast.info('Item Quantity Updated');
      } else {
        state.product.unshift({
          title: items.title,
          id: items.id,
          image: items.image,
          price: items.price,
          qty: items.qty,
        });
        toast.success('Item Added To Cart');
      }
      state.len = state.product.length;
    },
    increaseQty(state, id) {
      const prod = state.product.find((item) => item.id === id);
      if (prod && prod.qty < 10) {
        prod.qty += 1;
      } else {
        toast.success('Limit Reached');
      }
    },
    decreaseQty(state, id) {
      const prod = state.product.find((item) => item.id === id);
      if (prod) {
        if (prod.qty > 1) {
          prod.qty -= 1;
        } else {
          this.commit('removeItem', id); 
        }
      }
    },
    removeItem(state, id) {
      state.product = state.product.filter((item) => item.id !== id);
      toast.success('Item Removed From Cart');
      state.len--;
    },
    addToFav(state, items) {
      const exs = state.fav.find((x) => x.id === items.id);
      if (exs) {
        toast.info('Already Added To Your WishList ❤️');
        return;
      } else {
        state.fav.unshift({
          title: items.title,
          id: items.id,
          image: items.image,
          price: items.price,
          qty: items.qty,
        });
        toast.success('Item Added to WishList ❤️');
      }
      state.wish = state.fav.length;
    },
    removeFav(state, id) {
      state.fav = state.fav.filter((item) => item.id !== id);
      toast.success('Item Removed From WishList');
      state.wish--;
    },
  },
  actions: {
    addToCart({ commit }, items) {
      commit('addToCart', items);
    },
    increaseQty({ commit }, id) {
      commit('increaseQty', id);
    },
    decreaseQty({ commit }, id) {
      commit('decreaseQty', id);
    },
    removeItem({ commit }, id) {
      commit('removeItem', id);
    },  
    addToFav({ commit }, items) {
      commit('addToFav', items);
    },
    removeFav({ commit }, id) {
      commit('removeFav', id);
    },
  },
  getters: {
    getProducts(state) {
      return state.product;
    },
    getFavProducts(state) {
      return state.fav;
    },
    getCartLength(state) {
      return state.len;
    },
    getWishLength(state) {
      return state.wish;
    },
  },
});

export default store;