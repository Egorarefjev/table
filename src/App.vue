<template>
  <div id="app">
  <header class="header">
      <h1 class="try">Table UI</h1>
  </header>
    <article class="table">
      <nav class="table-sort">
        <div class="table-sort__sortItems">
          <p>Sorting by:</p>
          <button class="btn-active btn" v-on:click="this.sortProduct" value="name">Product (100g serving)</button>
          <button class="btn table-sort__sortItems_btn" v-on:click="this.sortProduct" value="calories"> Calories</button>
          <button class="btn table-sort__sortItems_btn" v-on:click="this.sortProduct" value="fat">Fat (g)</button>
          <button class="btn table-sort__sortItems_btn" v-on:click="this.sortProduct" value="carbs">Carbs (g)</button>
          <button class="btn table-sort__sortItems_btn" v-on:click="this.sortProduct" value="protein">Protein (g)</button>
          <button class="btn table-sort__sortItems_btn" v-on:click="this.sortProduct" value="iron">Iron (%)</button>
        </div>
        <div class="table-sort__btns">
          <div>
            <button class="btn table-sort__btns_deleteBtn">Delete</button>
          </div>
          <div>
            <select class="btn" v-on:change="this.changStep" v-model="selected" >
              <option> 10 Per Page</option>
              <option> 15 Per Page</option>
              <option> 20 Per Page</option>
            </select>
          </div>
          <div>
            <button class="btn" v-on:click="this.prevItem"><i class="fa fa-angle-left" aria-hidden="true"  ></i></button>
            <span>{{ this.startIndex + 1}} - {{ this.endIndex }} of {{ this.$store.getters.PRODUCTS.length }}</span>
            <button class="btn" v-on:click="this.nextItem"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
          </div>
          <div>
            <button class="btn" @click.prevent="showModalColumns = !showModalColumns">6 columns</button>
            <modalColumns v-if="showModalColumns"/>
          </div>
        </div>
      </nav>
      <table class="products">
        <tr>
          <td><input type="checkbox"></td><td>Product(100g serving)</td><td>Calories</td><td>Fat (g)</td><td>Carbs (g)</td><td>Protein (g)</td><td>Iron (%)</td><td>delete</td>
        </tr>
          <item v-for="item of collection" :key="item.id" :item="item"/>

        

      </table>
    </article>

  </div>
</template>

<script>

 import {getProducts} from "./server/request";
 import item from "./components/item";
 import modalColumns from "./components/modalColumns";
 export default {
   components: {item, modalColumns},
   data() {
     return {
       selected: "10 Per Page",
       products: [],
       perPage: 10,
       pagination: {},
       startIndex: 0,
       endIndex: 10,
       showModalColumns: false
      }
   },
   mounted() {
     this.getData()
     this.$store.getters.PRODUCTS.sort((a, b) => a.product > b.product ? 1 : -1)
   },
   computed: {
      collection() {
       return this.paginate(this.$store.getters.PRODUCTS)
      }
  },
   methods: {
     getData() {
       if (this.$store.getters.PRODUCTS != 0) {
         return;
       } else {
         getProducts().then((value) => {
         this.products = value
           this.$store.commit('SET_PRODUCTS', value)// Успех!
       })
         setTimeout( () => { if (this.$store.getters.PRODUCTS == 0) {
           this.getData();
         }}, 1000);
       }
     },
     paginate(arr) {
         return arr.slice(this.startIndex, this.endIndex)
    },
     nextItem() {
       if (this.endIndex != this.$store.getters.PRODUCTS.length) {
         this.startIndex = this.startIndex + this.perPage
         this.endIndex = this.endIndex + this.perPage
         if (this.endIndex > this.$store.getters.PRODUCTS.length) {
            let difference = this.endIndex - this.$store.getters.PRODUCTS.length
            this.endIndex = this.endIndex - difference
         }
         this.paginate(this.$store.getters.PRODUCTS)
       }

       },
     prevItem() {
      if (this.startIndex != 0) {
         this.startIndex = this.startIndex - this.perPage
         this.endIndex = this.endIndex - this.perPage
         if (this.startIndex < 0) {
           let difference = this.startIndex * (-1)
           this.startIndex = 0
           this.endIndex = this.endIndex + difference
         }
         this.paginate(this.$store.getters.PRODUCTS)
       }
     },
     changStep() {
       this.endIndex = this.endIndex - this.perPage
       if(this.selected == '10 Per Page') {
          this.perPage = 10
       } else if (this.selected == '15 Per Page') {
          this.perPage = 15
        } else {
          this.perPage = 20
        }
       this.endIndex = this.endIndex + this.perPage
       this.paginate(this.$store.getters.PRODUCTS)
     },
     sortProduct() {
        if (event.target.value == 'calories') {
         this.$store.getters.PRODUCTS.sort((a, b) => a.calories > b.calories ? 1 : -1)
        } else if (event.target.value == 'fat') {
         this.$store.getters.PRODUCTS.sort((a, b) => a.fat > b.fat ? 1 : -1)
       } else if (event.target.value == 'carbs') {
         this.$store.getters.PRODUCTS.sort((a, b) => a.carbs > b.carbs ? 1 : -1)
       } else if (event.target.value == 'protein') {
         this.$store.getters.PRODUCTS.sort((a, b) => a.protein > b.protein ? 1 : -1)
       } else if (event.target.value == 'iron') {
         this.$store.getters.PRODUCTS.sort((a, b) => a.iron > b.iron ? 1 : -1)
       } else if (event.target.value == 'name') {
         this.$store.getters.PRODUCTS.sort((a, b) => a.product > b.product ? 1 : -1)
       }
     }

   }
 }

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  background: #F2F2F2;
}

.btn {
  height: 32px;
  background: none;
  margin: 0 auto;
  border: 1px solid #D5DAE0;
  border-radius: 2px;
  padding: 8px;
  display: inline-block;
}

.btn-active {
  background: #00A11E;
  border-radius: 2px;
  color: white;
}

#app {
  padding: 0 calc(50% - 570px);
}

.header {
  border-bottom: 2px solid #EDEDED;
  padding: 32px 16px 10px 0px;
}

.table {

}
.table-sort {
  margin: 20px 0 20px 0;
  display: flex;
  justify-content: space-between;
  &__sortItems {
      p {
        padding-top: 8px;
        margin-right: 10px;
      }
      display: flex;
      justify-content: center;
      &_btn {
        border: none;
        display: block;
      }
  }
  &__btns {
    display: flex;
    justify-content: space-between;
    width: 40%;
    &_deleteBtn {
      opacity: 0.4;
    }
  }
}

.products {
  width: 100%;
  background: #F8F9FA;
  & tr:nth-child(2n) {
    background-color: #fff;
  }
}


</style>
