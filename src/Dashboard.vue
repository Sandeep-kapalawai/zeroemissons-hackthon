<template>
  <!-- ============================================================== -->
  <!-- Start right Content here -->
  <!-- ============================================================== -->
  <div class="content-page">
    <!-- Start content -->
    <div class="content">
      <div class="container-fluid">
        <div class="page-title-box">
          <div class="row align-items-center">
            <div class="col-sm-6">
              <h4 class="page-title">{{ msg }}</h4>
            </div>

            <!-- <div class="col-sm-6">
              <ol class="breadcrumb float-right">
                <li class="breadcrumb-item"><a href="#"></a></li>
                <li class="breadcrumb-item active">Dashboard</li>
              </ol>
            </div> -->
          </div>
          <!-- end row -->
        </div>
        <!-- end page-title -->
        <div class="font-15 center">Status:</div>
        <div class="meter animate">
          <span style="width: 30%"><span></span></span>
        </div>
        <div class="row">
          <div class="col-sm-4 col-xl-3">
            <div class="card">
              <div class="card-heading p-4">
                <div class="mini-stat-icon float-right">
                  <i class="mdi mdi-cube-outline bg-primary text-white"></i>
                </div>
                <div>
                  <h5 class="font-16">Total Yearly Diesel Consumption</h5>
                </div>
                <h3 class="mt-4">5.8 Million Litres</h3>
                <div class="progress mt-4" style="height: 4px">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 14%"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p class="text-muted mt-2 mb-0">
                  Reduced by <span class="float-right">14%</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-4 col-xl-3">
            <div class="card">
              <div class="card-heading p-4">
                <div class="mini-stat-icon float-right">
                  <i class="mdi mdi-briefcase-check bg-success text-white"></i>
                </div>
                <div>
                  <h5 class="font-16">Green Energy Score</h5>
                </div>
                <h3 class="mt-4">45/100</h3>
                <div class="progress mt-4" style="height: 4px">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style="width: 5%"
                    aria-valuenow="88"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p class="text-muted mt-2 mb-0">
                  Improved by<span class="float-right">5%</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-4 col-xl-3">
            <div class="card">
              <div class="card-heading p-4">
                <div class="mini-stat-icon float-right">
                  <i class="mdi mdi-tag-text-outline bg-warning text-white"></i>
                </div>
                <div>
                  <h5 class="font-16">Total Yearly C0<sup>2</sup> Emission</h5>
                </div>
                <h3 class="mt-4">151 KT</h3>
                <div class="progress mt-4" style="height: 4px">
                  <div
                    class="progress-bar bg-warning"
                    role="progressbar"
                    style="width: 15%"
                    aria-valuenow="68"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p class="text-muted mt-2 mb-0">
                  Reduced by <span class="float-right">15%</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-4 col-xl-3">
            <div class="card">
              <div class="card-heading p-4">
                <div class="mini-stat-icon float-right">
                  <i class="mdi mdi-buffer bg-danger text-white"></i>
                </div>
                <div>
                  <h5 class="font-16">Zero Emission Initiatives</h5>
                </div>
                <h3 class="mt-4">5</h3>
                <div class="progress mt-4" style="height: 4px">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style="width: 10%"
                    aria-valuenow="82"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p class="text-muted mt-2 mb-0">
                  Improved by <span class="float-right">30%</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-4">
            <div class="card m-b-30">
              <div class="card-body">
                <h4 class="mt-0 header-title mb-4">
                  Electric Energy Consumption
                </h4>
                <apexcharts
                  type="bar"
                  height="300"
                  :options="chartOptionsstacked"
                  :series="seriesstacked"
                />
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="card m-b-30">
              <div class="card-body">
                <h4 class="mt-0 header-title mb-4">Fuel Consumption</h4>
                <apexcharts
                  type="bar"
                  height="300"
                  :options="chartOptionsstackedfuel"
                  :series="seriesstackedfuel"
                />
              </div>
            </div>
          </div>
          <!-- end col -->

          <div class="col-xl-4">
            <div class="card m-b-30">
              <div class="card-body">
                <h4 class="mt-0 header-title mb-4">Energy Trend</h4>
                <apexcharts
                  type="donut"
                  height="350"
                  :options="chartOptionsdonut"
                  :series="seriesdonut"
                ></apexcharts>
                <!-- 
                <div
                  id="morris-donut-example"
                  class="morris-charts morris-chart-height"
                ></div> -->
              </div>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->

        <div class="row">
          <div class="col-xl-4">
            <div class="card m-b-30">
              <div class="card-body">
                <h4 class="mt-0 header-title mb-4">Improvement Initiatives</h4>
                <div class="friends-suggestions">
                  <a href="#" class="friends-suggestions-list">
                    <div class="border-bottom position-relative">
                      <!-- <div class="float-left mb-0 mr-3">
                        <img
                          src="assets/images/user-3.jpg"
                          alt=""
                          class="rounded-circle thumb-md"
                        />
                      </div> -->
                      <div class="suggestion-icon float-right mt-2 pt-1">
                        <i class="mdi mdi-forward"></i>
                      </div>

                      <div class="desc">
                        <h5 class="font-14 mb-1 pt-2" @click="fimsuggestion">
                          Reefer Optimization
                        </h5>
                        <p class="text-muted">&nbsp;</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="friends-suggestions-list">
                    <div class="border-bottom position-relative">
                      <!-- <div class="float-left mb-0 mr-3">
                        <img
                          src="assets/images/user-3.jpg"
                          alt=""
                          class="rounded-circle thumb-md"
                        />
                      </div> -->
                      <div class="suggestion-icon float-right mt-2 pt-1">
                        <i class="mdi mdi-forward"></i>
                      </div>

                      <div class="desc">
                        <h5 class="font-14 mb-1 pt-2" @click="fimsuggestion">
                          Distributed Energy System
                        </h5>
                        <p class="text-muted">&nbsp;</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="friends-suggestions-list">
                    <div class="border-bottom position-relative">
                      <!-- <div class="float-left mb-0 mr-3">
                        <img
                          src="assets/images/user-3.jpg"
                          alt=""
                          class="rounded-circle thumb-md"
                        />
                      </div> -->
                      <div class="suggestion-icon float-right mt-2 pt-1">
                        <i class="mdi mdi-forward"></i>
                      </div>

                      <div class="desc">
                        <h5 class="font-14 mb-1 pt-2" @click="fimsuggestion">
                          Green Power Purchase
                        </h5>
                        <p class="text-muted">&nbsp;</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-4" v-show="fimsuggestionSelected">
            <div class="card m-b-30">
              <div class="card-body">
                <h4 class="mt-0 header-title mb-4">FIM Description</h4>

                {{ renderfimDescription }}

                <!-- <div
                  id="morris-line-example"
                  class="morris-chart"
                  style="height: 360px"
                ></div> -->
              </div>
            </div>
          </div>

          <div class="col-xl-4" v-show="fimsuggestionSelected">
            <div class="card m-b-30">
              <div class="card-body">
                <h4 class="mt-0 header-title mb-4">FIM BENEFITS</h4>
                <ol class="activity-feed mb-0">
                  <li class="feed-item">
                    <div class="feed-item-list">
                      <!-- <p class="text-muted mb-1">Now</p> -->
                      <p class="font-15 mt-0 mb-0">
                        {{ renderfimlistitemone }}
                      </p>
                    </div>
                  </li>
                  <li class="feed-item">
                    <p class="font-15 mt-0 mb-0">
                      {{ renderfimlistitemtwo }}
                    </p>
                  </li>
                  <li class="feed-item">
                    <p class="font-15 mt-0 mb-0">
                      {{ renderfimlistitemthree }}
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <!-- START ROW -->
        <div class="row">
          <div class="col-xl-7">
            <div class="card m-b-30">
              <div class="card-body">
                <h4 class="mt-0 header-title mb-4">Asset Details</h4>
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Energy Type</th>
                        <th scope="col"></th>
                        <th scope="col">Count</th>

                        <th scope="col">Suppliers</th>
                        <th scope="col" colspan="2">
                          Zero Emission Recommendation
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Quay Crane - QC</td>
                        <td>
                          <span>Diesel</span>
                        </td>
                        <td>
                          <div class="circle-brown"></div>
                        </td>
                        <td>10</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-l btn-secondary"
                            @click="show = true"
                          >
                            List
                          </button>
                        </td>
                        <td>
                          <button type="button" class="btn btn-l btn-primary">
                            View
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Rubber Tyred Gantry - RTG</td>
                        <td>
                          <span> Hybrid</span>
                        </td>
                        <td>
                          <div class="circle-green"></div>
                        </td>
                        <td>36</td>

                        <td>
                          <button type="button" class="btn btn-l btn-secondary">
                            List
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-l btn-primary"
                            @click="selectedView"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Terminal Tractor - TT</td>
                        <td>
                          <span> Brown</span>
                        </td>
                        <td>
                          <div class="circle-brown"></div>
                        </td>
                        <td>126</td>

                        <td>
                          <button type="button" class="btn btn-l btn-secondary">
                            List
                          </button>
                        </td>
                        <td>
                          <button type="button" class="btn btn-l btn-primary">
                            View
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-5" v-show="selectedOption === 'View'">
            <apexcharts
              width="500"
              height="350"
              type="treemap"
              :options="chartOptionstree"
              :series="seriestree"
            ></apexcharts>
          </div>
        </div>
        <!-- <SparklineGraph /> -->

        <!-- 
        <apexcharts
          width="500"
          height="350"
          type="bar"
          :options="chartOptions"
          :series="series"
        ></apexcharts>

        <apexcharts
          width="380"
          type="line"
          :options="chartOptions2"
          :series="series"
        ></apexcharts>
        <apexcharts
          width="380"
          type="area"
          :options="chartOptions2"
          :series="series"
        ></apexcharts>
        <apexcharts
          width="380"
          type="heatmap"
          :options="chartOptions2"
          :series="series"
        ></apexcharts>

        <apexcharts
          type="rangeArea"
          height="350"
          :options="chartOptionsrange"
          :series="series"
        ></apexcharts>
        <h1>test</h1> -->

        <!-- END ROW -->
      </div>
      <!-- container-fluid -->
    </div>
    <vue-final-modal
      v-model="show"
      classes="modal-container"
      content-class="modal-content"
    >
      <DashboardTerminalAssetsQC />

      <button class="modal-close" @click="show = false">x</button>
    </vue-final-modal>
    <!-- content -->
    <!-- <checkbox-svg-map v-model="selectedLocations" :map="Taiwan" /> -->
    <footer class="footer">
      <div>
        Disclaimer: The information provided is not the real data, its for
        visual purpose
      </div>
      <div>
        ??2022 Maersk Hackathon
        <span class="d-none d-sm-inline-block">
          <span>- Made with </span>Love <i class="mdi mdi-heart text-danger"></i
        ></span>
      </div>
    </footer>
  </div>

  <!-- ============================================================== -->
  <!-- End Right content here -->
  <!-- ============================================================== -->
</template>
<script>
  import VueApexCharts from "vue3-apexcharts";
  // import SparklineGraph from "./SparklineGraph.vue";
  import { VueFinalModal } from "vue-final-modal";

  import DashboardTerminalAssetsQC from "./DashboardTerminalAssetsQC.vue";

  export default {
    name: "Dashboard",
    props: {
      msg: String,
    },
    components: {
      apexcharts: VueApexCharts,
      VueFinalModal,
      DashboardTerminalAssetsQC,
    },
    data: function () {
      return {
        fimsuggestionSelected: "",
        selectedOption: "",
        show: false,
        chartOptions: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
          yaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
        },
        chartOptions2: {
          chart: {
            id: "basic-bar3",
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },

          {
            name: "series-2",
            data: [30, 40, 45, 50, 49, 10, 70, 91],
          },
        ],
        options: {},
        seriesdonut: [40, 55, 4], //series -3 is green /renewable , 1-disel red ,2 yellow-electric
        chartOptionsdonut: {
          labels: ["Diesel", "Electric", "Renewable"],
          chart: {
            type: "donut",
            foreColor: "#FFFFFF",
          },
          colors: ["#1f0000", "#c9e423", "#379237"],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
        seriesrange: [
          {
            name: "New York Temperature",
            data: [
              {
                x: "Jan",
                y: [-2, 4],
              },
              {
                x: "Feb",
                y: [-1, 6],
              },
              {
                x: "Mar",
                y: [3, 10],
              },
              {
                x: "Apr",
                y: [8, 16],
              },
              {
                x: "May",
                y: [13, 22],
              },
              {
                x: "Jun",
                y: [18, 26],
              },
              {
                x: "Jul",
                y: [21, 29],
              },
              {
                x: "Aug",
                y: [21, 28],
              },
              {
                x: "Sep",
                y: [17, 24],
              },
              {
                x: "Oct",
                y: [11, 18],
              },
              {
                x: "Nov",
                y: [6, 12],
              },
              {
                x: "Dec",
                y: [1, 7],
              },
            ],
          },
        ],
        chartOptionsrange: {
          chart: {
            height: 350,
            type: "rangeArea",
          },
          stroke: {
            curve: "straight",
          },
          title: {
            text: "New York Temperature (all year round)",
          },
          markers: {
            hover: {
              sizeOffset: 5,
            },
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            labels: {
              formatter: (val) => {
                return val + "??C";
              },
            },
          },
        },
        seriesstacked: [
          {
            name: "Reefer Electricity Consumption (KWH)",
            data: [18102, 14150, 15433, 19215, 17518, 16923, 16601],
          },
          {
            name: "Other Electricity Consuption (KWH)",
            data: [11734, 11306, 9914, 10277, 10443, 10127, 9385],
          },
          // {
          //   name: "Diesel Consumption(Litres)",
          //   data: [6590, 6235, 5567, 6476, 6515, 6590, 5848],
          // },
        ],
        seriesstackedfuel: [
          {
            name: "Diesel Consumption(Litres)",
            data: [6590, 6235, 5567, 6476, 6515, 6590, 5848],
          },
        ],
        chartOptionsstackedfuel: {
          title: {
            text: "Diesel Consumption(Litres)",
            align: "left",
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize: "14px",
              fontWeight: "bold",
              fontFamily: undefined,
              color: "#FFF",
            },
          },

          style: {
            fontSize: "14px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold",
            color: "#FFFF",
          },
          chart: {
            type: "bar",
            height: "auto",
            width: "10%",
            stacked: true,
            foreColor: "#FFFFFF",
            // background: "#fff",
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                enabled: true,
                dropShadow: {
                  enabled: true,
                  left: 2,
                  top: 2,
                  opacity: 0.5,
                },
                total: {
                  enabled: false,
                  offsetX: 0,
                  style: {
                    fontSize: "13px",
                    fontWeight: 900,
                    color: "#fffff",
                  },
                },
              },
            },
          },
          stroke: {
            width: 1,
            colors: ["#fff"],
          },
          // title: {
          //   text: "",
          // },
          xaxis: {
            categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
            labels: {
              formatter: function (val) {
                return val + "Litres";
              },
            },
          },
          yaxis: {
            title: {
              text: "",
            },
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + "K";
              },
            },
          },
          fill: {
            opacity: 1,
          },
          legend: {
            position: "top",
            horizontalAlign: "left",
            offsetX: 40,
            text: "white",
          },
        },
        chartOptionsstacked: {
          title: {
            text: "",
            align: "left",
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize: "14px",
              fontWeight: "bold",
              fontFamily: undefined,
              color: "#263238",
            },
          },

          colors: ["#2E93fA", "#66DA26", "#c9bbbb", "#E91E63", "#FF9800"],
          style: {
            fontSize: "14px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold",
            colors: "#2E93fA",
          },
          chart: {
            type: "bar",
            height: "auto",
            width: "10%",
            stacked: true,
            foreColor: "#FFFFFF",
            // background: "#fff",
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                total: {
                  enabled: false,
                  offsetX: 0,
                  style: {
                    fontSize: "13px",
                    fontWeight: 900,
                  },
                },
              },
            },
          },
          stroke: {
            width: 1,
            colors: ["#fff"],
          },
          // title: {
          //   text: "",
          // },
          xaxis: {
            categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
            labels: {
              formatter: function (val) {
                return val + "K";
              },
            },
          },
          yaxis: {
            title: {
              text: "",
            },
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + "K";
              },
            },
          },
          fill: {
            opacity: 1,
          },
          legend: {
            position: "top",
            horizontalAlign: "left",
            offsetX: 40,
            text: "white",
          },
        },
        title: {
          text: undefined,
          align: "left",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: "#263238",
          },
        },
        seriestree: [
          {
            data: [
              {
                x: "Hybridzation",
                y: 40,
              },
              {
                x: "Electrify",
                y: 149,
              },
              {
                x: "Load Balance",
                y: 70,
              },
              {
                x: "Replace",
                y: 55,
              },
            ],
          },
        ],
        chartOptionstree: {
          legend: {
            show: false,
          },
          chart: {
            height: 350,
            type: "treemap",
          },
          title: {
            text: "Recommendations",
            align: "center",

            style: {
              fontSize: "14px",
              fontWeight: "bold",
              fontFamily: undefined,
              color: "#FFFFFF",
            },
          },
          colors: [
            "#3B93A5",
            "#F7B844",
            "#ADD8C7",
            "#EC3C65",
            "#CDD7B6",
            "#C1F666",
            "#D43F97",
            "#1E5D8C",
            "#421243",
            "#7F94B0",
            "#EF6537",
            "#C0ADDB",
          ],
          plotOptions: {
            treemap: {
              distributed: true,
              enableShades: false,
            },
          },
        },
      };
    },
    methods: {
      fimsuggestion(event) {
        event.preventDefault();
        console.log(event.target.innerText, "name");
        this.fimsuggestionSelected = event.target.innerText;
      },
      selectedView(event) {
        event.preventDefault();
        console.log(event.target.innerText, "name");
        this.selectedOption = event.target.innerText;
      },
    },
    computed: {
      renderfimDescription() {
        if (
          this.fimsuggestionSelected ===
          "Rubber Tyred Gantry Crane Optimization"
        ) {
          return "Concept of substituting less efficient big capacity Diesel Generator, which used to feed the RTG power during operation with an energy storage battery system & better efficient smaller capacity Diesel Generator to provide a positive recharge cycle, which means DG will be used for only charging the batteries to compensate the loss of energy on account of ???RTG electro-mechanical overall efficiency";
        } else if (this.fimsuggestionSelected === "Transformer optimization") {
          return "Transformer paralleling operation would be governed by programming the RTU panel with two modes of operation - Automatic and Manual mode. Transformer Optimization FIM reduces losses in the operation of substations E2 and E3 substation";
        } else if (this.fimsuggestionSelected === "Reefer Optimization") {
          return "Reefer Optimization FIM smoothens peaks in terminal power consumption and to reduce energy consumption in the reefer area, which is responsible for almost 2/3 of the entire terminal electricity consumption.";
        } else if (this.fimsuggestionSelected === "Distributed Energy System") {
          return "Distributed energy system involves the design, engineering, supply, installation, commissioning, supervision, and services for a distributed energy system comprising of a cantilever based 1.5MWp DC solar system on the piers, a containerized battery energy storage system of 2.7MWh (3.6MWh Nameplate), a microgrid controller and digital solution";
        } else if (this.fimsuggestionSelected === "Green Power Purchase") {
          return "Green power refers specifically to electricity supplied from a subset of renewable resources that provide the highest environmental benefit. Green power provides benefits both directly and indirectly to the buyer. Organizations interested in buying green power can go for options like green power procurement process, different green power supply options, benefits of green power purchasing, as well as information on how to capture the greatest benefit from your purchase.";
        }
        return "";
      },
      renderfimlistitemone() {
        if (
          this.fimsuggestionSelected ===
          "Rubber Tyred Gantry Crane Optimization"
        ) {
          return "Fuel savings";
        } else if (this.fimsuggestionSelected === "Transformer optimization") {
          return "Energy cost savings";
        } else if (this.fimsuggestionSelected === "Reefer Optimization") {
          return "Energy cost savings";
        } else if (this.fimsuggestionSelected === "Distributed Energy System") {
          return " Energy cost savings";
        } else if (this.fimsuggestionSelected === "Green Power Purchase") {
          return "Environmental benefits";
        }
        return "";
      },
      renderfimlistitemtwo() {
        if (
          this.fimsuggestionSelected ===
          "Rubber Tyred Gantry Crane Optimization"
        ) {
          return "Carbon reduction";
        } else if (this.fimsuggestionSelected === "Transformer optimization") {
          return "Carbon reduction";
        } else if (this.fimsuggestionSelected === "Reefer Optimization") {
          return "Carbon reduction";
        } else if (this.fimsuggestionSelected === "Distributed Energy System") {
          return "Carbon reduction";
        } else if (this.fimsuggestionSelected === "Green Power Purchase") {
          return "Economic benefits to the purchasing organization";
        }
        return "";
      },
      renderfimlistitemthree() {
        if (
          this.fimsuggestionSelected ===
          "Rubber Tyred Gantry Crane Optimization"
        ) {
          return "Productivity capture";
        } else if (this.fimsuggestionSelected === "Transformer optimization") {
          return "Optimization of investment ";
        } else if (this.fimsuggestionSelected === "Reefer Optimization") {
          return "Reduced overall peak load of terminal";
        } else if (this.fimsuggestionSelected === "Distributed Energy System") {
          return "Optimization of investment ";
        } else if (this.fimsuggestionSelected === "Green Power Purchase") {
          return "Development of domestic energy resources";
        }
        return "";
      },
    },
  };
</script>
<style>
  .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    position: relative;
    width: 70% !important;
    height: auto;

    padding: 20px;
    overflow: auto;
    background-color: #3a3e5c !important;
    border-radius: 7px;
  }
  .modal-close {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    margin: 8px 8px 0 0;
    cursor: pointer;
  }
  .modal-close::hover {
    color: rgb(71, 68, 68);
  }
</style>
<style scoped>
  .meter {
    box-sizing: content-box;
    width: 30%;
    height: 10px; /* Can be anything */
    position: relative;
    margin: 10px 0 20px 0; /* Just for demo spacing */
    background: #9f8772;
    border-radius: 25px;
    padding: 10px;
    box-shadow: inset 0 -1px 1px rgba(102, 41, 23, 0.062);
  }

  .meter > span:after,
  .animate > span > span {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
    z-index: 1;
    background-size: 50px 50px;
    animation: move 2s linear infinite;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    overflow: hidden;
  }

  .animate > span:after {
    display: none;
  }

  @keyframes move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 50px;
    }
  }

  .orange > span {
    background-image: linear-gradient(#f1a165, #f36d0a);
  }

  .red > span {
    background-image: linear-gradient(#f0a3a3, #f42323);
  }

  * {
    box-sizing: border-box;
  }
</style>
