<template>
  <div class="q-pa-md">
    <div class="bottom row row-cols-5 wrap">
  <div class="row items-start col" style="max-width:350px">
    <q-card class="my-card" style="min-width:250px" flat bordered>
      <q-img 
        src="res/banana.jpg" style="max-height:165px"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">{{ $t("0.prod_id") }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ $t("item1.name") }}</div>
        <div class="text-caption text-grey">
         {{ $t("item1.desc") }}</div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="green" label="Buy" />
        <q-btn flat color="primary" label="Cart" />

      </q-card-actions>

    </q-card>
  </div>
  <div class="row items-start col" style="max-width:350px">
    <q-card class="my-card" style="min-width:250px" flat bordered>
      <q-img
        src="res/eggs.jpg" style="max-height:165px"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">{{ $t("item2.category") }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ $t("item2.name") }}</div>
        <div class="text-caption text-grey">
         {{ $t("item2.desc") }}</div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="green" label="Buy" />
        <q-btn flat color="primary" label="Cart" />

      </q-card-actions>

    </q-card>
  </div>
  <div class="row items-start col" style="max-width:350px">
    <q-card class="my-card" style="min-width:250px" flat bordered>
      <q-img
        src="res/steak.jpg" style="max-height:165px"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">{{ $t("item3.category") }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ $t("item3.name") }}</div>
        <div class="text-caption text-grey">
         {{ $t("item3.desc") }}</div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="green" label="Buy" />
        <q-btn flat color="primary" label="Cart" />

      </q-card-actions>

    </q-card>
  </div>
  <div class="row items-start col" style="max-width:350px">
    <q-card class="my-card" style="min-width:250px" flat bordered>
      <q-img style="max-height:165px"
        src="res/sofa.jpg"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">{{ $t("item4.category") }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ $t("item4.name") }}</div>
        <div class="text-caption text-grey">
         {{ $t("item4.desc") }}</div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="green" label="Buy" />
        <q-btn flat color="primary" label="Cart" />

      </q-card-actions>

    </q-card>
  </div>
  <div class="row items-start col" style="max-width:350px">
    <q-card class="my-card" style="min-width:250px" flat bordered>
      <q-img
        src="res/note.jpg" style="max-height:165px"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">{{ $t("item5.category") }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ $t("item5.name") }}</div>
        <div class="text-caption text-grey">
         {{ $t("item5.desc") }}</div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="green" label="Buy" />
        <q-btn flat color="primary" label="Cart" />

      </q-card-actions>

    </q-card>
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
  methods:{
    changeLocale(lang_code){
      this.$i18n.locale = lang_code;
    },
    getData(){
      const axios = require('axios');
      axios.get('http://127.0.0.1:8000/api/')
      .then(function (response) {
        // handle success
          console.log(response.data);
        })
      .catch(function (error) {
        // handle error
          console.log(error);
        })
    }
  }
}
</script>
