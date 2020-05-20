<template>
  <tr>
    <td  v-for="column of selectedColumns" :key="column.name" :column="column"> {{ column.text }} </td>
    <td><input type="checkbox"></td>
    <td>{{ item.product }}</td>
    <td>{{ item.calories}}</td>
    <td>{{ item.fat}}</td>
    <td>{{ item.carbs }}</td>
    <td>{{ item.protein }}</td>
    <td>{{ item.iron }}</td>
    <td>Delete</td>
  </tr>

</template>

<script>
export default {
  props: {

    type: {
      type: String,
    },
    item: {
      type: Object
    }
  },
  mounted() {

  },
  data() {
    return {
      selectedColumns: [
        {
          name: 'selectAll',
          text: '<input type="checkbox">'

        },
        {
          name:"product",
          text: '{{ item.product }}'

        },
        {
          name:"calories",
          text: '{{ item.calories}}'

        },
        {
          name:"fat",
          text:'{{ item.fat}}>'

        },
        {
          name:"carbs",
          text: '{{ item.carbs }}'

        },
        {
          name:"protein",
          text: '{{ item.protein }}'

        },
        {
          name: "iron",
          text: '{{ item.iron }}'

        },
        {
          name:"Delete",
          text:'Delete'

        }
      ]
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
