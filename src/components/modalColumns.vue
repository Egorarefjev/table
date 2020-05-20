<template>
   <div class="table__modal-columns">
       <div class="modal-columns__column">
           <input type="checkbox" class="" name="Select All" id="SelectAll">
           <label for="SelectAll">Select All</label>
       </div>
       <div class="modal-columns__column">
           <input type="checkbox" class="" name="Product (100g serving)" id="Product">
            <label for="Product">Product (100g serving)</label>
       </div>
       <div class="modal-columns__column">
           <input type="checkbox" class="" name="Calories" id="Calories">
            <label for="Calories">Calories</label>
       </div>
       <div class="modal-columns__column">
           <input type="checkbox" class="" name="Fat (g)" id="Fat">
            <label for="Fat">Fat</label>
       </div>
       <div class="modal-columns__column">
           <input type="checkbox" class="" name="Carbs (g)" id="Carbs">
        <label for="Carbs">Scales</label>
       </div>
       <div class="modal-columns__column">
           <input type="checkbox" class="" name="Protein (g)" id="Protein">
            <label for="Protein">Protein</label>
       </div>
       <div class="modal-columns__column">
           <input type="checkbox" class="" name="Iron (%)" id="Iron">
            <label for="Iron">Scales</label>
       </div>
   </div>

</template>

<script>
    export default {

    }
</script>

<style lang="scss">

.table__modal-columns {
    position: absolute;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
    border-radius: 4px;
}
.modal-columns__column {


}
</style>