<template>
    <v-card flat>
        <v-toolbar color="white" flat>
          <v-toolbar-title >
            <v-icon size="24px" class="grey--text">{{ item.icon }}</v-icon>
            <span class="subheading grey--text" > {{item.title}}</span>
          </v-toolbar-title>
        </v-toolbar>
        <v-container fluid  style="min-height: 0;" grid-list-md>
          <v-layout row wrap>
            <template  v-for="(one,index) in item.subs">
            <v-flex d-flex xs12 sm6 md4 v-if="!one.subs" :key="'sub_'+index">
             <v-card flat  :href="one.url" target="_blank" hover>
              <v-card-title class="subheading pb-0">
                {{one.title}}
              </v-card-title>
              <v-card-text class="grey--text pt-0">
                {{one.desc}}
              </v-card-text>
            </v-card>
            </v-flex>
            <template v-else>
              <v-flex d-flex xs12 :key="'sub_b_'+index">
                 <v-layout row wrap>
                   <v-flex  xs3 sm2 md1>
                    <v-card flat>
                      <v-card-text v-text="one.title" class="grey--text">
                      </v-card-text>
                    </v-card>
                   </v-flex>
                   <v-flex xs9 sm10 md11>
                      <v-layout row wrap>
                        <v-flex  child-flex xs12 sm4 md2 v-for="(one,index) in one.subs"  :key="'sub_b_one_'+index" >
                          <v-card flat  :href="one.url" target="_blank" hover tile>
                            <v-card-title class="subheading pb-0">
                              {{one.title}}
                            </v-card-title>
                            <v-card-text class="grey--text pt-0">
                              {{one.desc}}&nbsp;
                            </v-card-text>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
              </v-flex>
            </template>
            </template>
          </v-layout>
        </v-container>
      </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    // 为 card 分配随机颜色
    randomColor: function () {
    }
  }
}
</script>

<style>
.container{
  padding: 0;
}
</style>
