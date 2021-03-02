<template>
  <div>
    <h3 class="mb-3">Tellimused</h3>

    <!--<p>Count: {{ count }}</p>
    <button @click="addCount()">+</button>
    <button @click="removeCount()">-</button> -->

    <b-table striped hover :items="items" :fields="fields">
      <!-- TELLIMUSTE TABEL -->
      <template #cell(client)="data">
        <b class="text-info">{{ data.value.lastName }}</b>, <b>{{ data.value.firstName }}</b>
      </template>

      <template #cell(totalPrice)="data">
        <b class="text-info">{{ data.value }} EUR</b>
      </template>

      <!-- nupp toodete tabeli ilmumiseks -->
      <template #cell(actions)="data">
        <b-button v-b-modal.modal-1 variant="success" @click="showProducts(data.item.products, data.item)"
          >Vaata tooteid</b-button
        >
      </template>
    </b-table>
    <!-- TOOTE TABEL -->
    <b-modal id="modal-1" :title=productTableName size="xl">
    <b-table striped hover :items="productItems" :fields="productFields">
       <template #cell(price)="data">
        <b class="text-info">{{ data.value}} EUR</b>
      </template>
    </b-table>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Orders",
  data() {
    return {
      fields: [
        { key: "client", label: "Tellija:" },
        { key: "createdDate", label: "Tellimus esitatud:" },
        { key: "deliveryMethod", label: "Transpordiviis:" },
        { key: "deliveryAddress", label: "Paki saatmise aadress:" },
        { key: "parcelMachine", label: "Pakiautomaat:" },
        { key: "totalPrice", label: "Tellimuse summa kokku:" },
        { key: "actions", label: "" },
      ],
      items: [],
      productItems: [],
      productFields: [
        { key: "productID", label: "Toote ID:" },
        { key: "productName", label: "Toote nimi:" },
        { key: "quantity", label: "Kogus:" },
        { key: "price", label: "Ühe toote hind:" },
      ],
      productTableName: "Pealkiri",
     } 
  },
  async created () {
    const orders = await axios({
      url: `api/orders`,
      method: `GET`,
      headers: {},
    });
    console.log(orders);
    this.items = orders.data.allOrders;
  },
  methods: {
    showProducts(products, item) {
      this.productItems = products;
      this.productTableName = "Tellimus nr: " + item.orderID;
    },
    addCount() {
      this.count++;
    },
    removeCount() {
      this.count--;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
