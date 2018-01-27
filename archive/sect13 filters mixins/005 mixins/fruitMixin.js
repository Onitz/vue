export const fruitMixin = {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    };
  },
  computed: {
    filteredFruits() { //this is a good alternative to a filter
      return this.fruits.filter(element=>{
        return element.match(this.filterText); //parsing a raw regex here, ok?
      });
    }
  }
};