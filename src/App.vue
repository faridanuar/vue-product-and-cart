<template>
    <header class="top-bar spread">
        <nav class="top-bar-nav">
            <router-link to="/" class="top-bar-link">
                <i class="icofont-spoon-and-fork"></i>
                <span>Home</span>
            </router-link>
            <router-link to="products" class="top-bar-link">
                <span>Products</span>
            </router-link>
            <router-link to="past-orders" class="top-bar-link">
                <span>Past Orders</span>
            </router-link>
        </nav>
        <div @click="toggleSidebar" class="top-bar-cart-link">
            <i class="icofont-cart-alt icofont-1x"></i>
            <span>Cart ({{ totalQuantity }})</span>
        </div>
    </header>
    <router-view :inventory="inventory" :addToCart="addToCart" />
    <Sidebar
      v-if="showSidebar"
      :toggle="toggleSidebar"
      :cart="cart"
      :inventory="inventory"
      :remove="removeItem"
    />
</template>

<script>
// use @ to directly go to source directory
import Sidebar from '@/components/Sidebar.vue'
// Import data from .json file
import food from '@/food.json'

export default {
  components: {
    Sidebar
  },
  data () {
    return {
      showSidebar: false,
      inventory: food,
      cart: {}
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  },
  methods: {
    addToCart (name, quantity) {
      if (quantity && quantity > 0) {
        if (!this.cart[name]) this.cart[name] = 0

        this.cart[name] += quantity
      }
    },
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    },
    removeItem (name) {
      delete this.cart[name]
    }
  }
}
</script>

<!-- scoped keyword is to restrict styling affect to this App.vue file only -->
<!-- <style scoped></style> -->
