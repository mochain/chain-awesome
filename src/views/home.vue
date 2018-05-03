<template>
        <v-container fluid  style="min-height: 0;" grid-list-lg>
          <v-layout row wrap>
             <v-flex d-flex xs12 sm12 md12 v-for="(item,index) in navs" :key="index" :id="'nav_'+index" v-if="item.subs && item.subs.length>0">
                <card  :item="item"  />
             </v-flex>
              <v-spacer></v-spacer>
          </v-layout>
        </v-container>
</template>

<script>
import navs from '@/assets/res.json'
import card from '@/components/card'
export default {
  data: () => ({
    navs: navs
  }),
  components: {
    card
  }
}
</script>

<style>

</style>
