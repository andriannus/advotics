<template>
  <div class="Dashboard">
    <div class="Grids AlignItems-center">
      <div class="Grid-7">
        <h2 class="Dashboard-headline">Dashboard</h2>
      </div>

      <div class="Grid-5">
        <adv-date-range></adv-date-range>
      </div>
    </div>

    <div class="Dashboard-insights">
      <h3>MARKET INSIGHTS</h3>

      <div class="Flex AlignItems-center">
        <img :src="HelpIcon" alt="Help" class="Icon" />
        <span class="Dashboard-link">Click Here for Help</span>
        <img :src="ChevronUpIcon" alt="Chevron Up" class="Icon" />
      </div>
    </div>

    <div class="Grids MarginBottom">
      <div class="Grid Grid-3">
        <adv-card class="Dashboard-turnover" elevated>
          <template #title>
            <span class="Dashboard-cardSubtitle">Sales Turnover</span>
          </template>

          <div class="Flex AlignItems-center JustifyContent-between">
            <div class="Flex Flex-column MarginRight-small">
              <p class="Dashboard-turnoverHeadline">
                {{ salesTurnoverRupiah }}
              </p>

              <div class="Dashboard-turnoverDescription">
                <img :src="ArrowDownIcon" alt="Arrow Down" />
                <strong class="is-danger">13.8%</strong>
                <span>&nbsp;last period in products sold</span>
              </div>
            </div>

            <div class="Dashboard-turnoverImage">
              <img :src="TrolleyImage" alt="Trolley" />
            </div>
          </div>
        </adv-card>
      </div>
    </div>

    <div class="Grids">
      <div class="Grid-6">
        <adv-card elevated>
          <template #title>
            <span class="Dashboard-cardTitle">AVERAGE PURCHASE VALUE</span>

            <select
              v-model="state.lastMonth"
              class="Select"
              name="Select"
              id="SlcLastMonth"
            >
              <option value="6">Last 6 months</option>
              <option value="3">Last 3 months</option>
              <option value="1">Last month</option>
            </select>
          </template>

          <adv-chart
            id="CrtAverage"
            :configuration="state.chartConfiguration"
          ></adv-chart>
        </adv-card>
      </div>

      <div class="Grid-3">
        <adv-card elevated>
          <template #title>
            <span class="Dashboard-cardTitle">BEST SELLING SKU</span>
          </template>

          <div>
            <adv-media
              v-for="(best, index) in BEST_SELLING_SKU"
              :key="`best-${index}`"
              :class="{
                'MarginBottom-small': index < BEST_SELLING_SKU.length - 1,
              }"
              :name="best.name"
              picture="/images/png/product.png"
              :price="best.price"
              :primary="index === 0"
              :sold="best.sold"
            ></adv-media>
          </div>
        </adv-card>
      </div>

      <div class="Grid-3">
        <adv-card elevated>
          <template #title>
            <span class="Dashboard-cardTitle">TOP COMPETITOR SKU</span>
          </template>

          <div>
            <adv-media
              v-for="(top, index) in TOP_COMPETITOR_SKU"
              :key="`top-${index}`"
              :class="{
                'MarginBottom-small': index < TOP_COMPETITOR_SKU.length - 1,
              }"
              :name="top.name"
              picture="/images/png/product.png"
              :price="top.price"
              :primary="index === 0"
              :sold="top.sold"
            ></adv-media>
          </div>
        </adv-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./dashboard.component.ts"></script>
<style lang="scss" scoped src="./dashboard.component.scss"></style>
