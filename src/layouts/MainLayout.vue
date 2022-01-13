<template>
  <div class="q-pa-md">
    <div class="bottom row row-cols-5 wrap">
      <div v-for="key in items" :key="key">
        <div class="row items-start col" style="max-width:350px">
        <q-card class="my-card" style="min-width:250px" flat bordered>
          <q-img 
            src="res/banana.jpg" style="max-height:165px"
          />
          <q-card-section>
            <div class="text-overline text-orange-9">{{ res_data[key].prod_class_ta }}</div>
            <div class="text-h5 q-mt-sm q-mb-xs">{{ res_data[key].prod_name_ta }}</div>
            <div class="text-caption text-grey">
            {{ res_data[key].prod_desc_ta }}</div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="green" label="Buy" />
            <q-btn flat color="primary" label="Cart" />

          </q-card-actions>

        </q-card>
      </div>
      </div>
    </div>
    <br>
    <div class="link-cont mt-auto">
      <q-item>
        <q-item-section>
          <div class="row" style="max-width:fit-content">
          <q-btn ref="target" color="dark" push label="Test Button" value="ta" @click="getData()"></q-btn>

          <q-btn ref="target" color="dark" push label="English" value="ta" @click="changeLocale('en')"></q-btn>
          <q-btn ref="target" color="dark" push label="தமிழ்" value="ta" @click="changeLocale('ta')"></q-btn>
          <q-btn ref="target" color="dark" push label="తెలుగు" value="ta" @click="changeLocale('te')"></q-btn>
          <q-btn ref="target" color="dark" push label="ಕನ್ನಡ" value="ta" @click="changeLocale('ka')"></q-btn>
          <q-btn ref="target" color="dark" push label="മലയാളം" value="ta" @click="changeLocale('ma')"></q-btn>
          </div>
        </q-item-section>
      </q-item>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MainLayout',
  components: {  },
  data(){
      return{
        res_data:{
          
        },
        items:[0,1,2,3,4],
      }
    },
  methods:{
    changeLocale(lang_code){
      this.$i18n.locale = lang_code;
    },
    getData(){
      const axios = require('axios');
      var self = this;
      axios.get('http://localhost:8000/api/getdata/?lang_code=ta')
        .then(function (response) {
          
          self.res_data = response.data;
          console.log(self.res_data[0]["prod_id"])
      })
        .catch(function (error) {
          console.log(error);
        })
    },
  }
}
</script>
