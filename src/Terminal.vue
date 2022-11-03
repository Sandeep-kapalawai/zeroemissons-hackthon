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
        <div class="font-20 center padding-1">Terminal Summary</div>
        <div class="row">
          <div class="col-sm-12 col-xl-4">
            <div class="card">
              <div class="card-heading p-4">
                <div class="mini-stat-icon float-right">
                  <i class="mdi mdi-briefcase-check bg-success text-white"></i>
                </div>
                <div>
                  <h5 class="font-16">Scope 1 Direct</h5>
                </div>
                <h3 class="mt-4">270KT CO<sup>2</sup></h3>
                <div class="progress mt-4" style="height: 4px">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style="width: 9%"
                    aria-valuenow="88"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p class="text-muted mt-2 mb-0">
                  Increased by<span class="float-right">9%</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-xl-4">
            <div class="card">
              <div class="card-heading p-4">
                <div class="mini-stat-icon float-right">
                  <i class="mdi mdi-tag-text-outline bg-warning text-white"></i>
                </div>
                <div>
                  <h5 class="font-16">Scope 2 Indirect</h5>
                </div>
                <h3 class="mt-4">190KT CO<sup>2</sup></h3>
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

          <div class="col-sm-6 col-xl-4">
            <div class="card">
              <div class="card-heading p-4">
                <div class="mini-stat-icon float-right">
                  <i class="mdi mdi-buffer bg-danger text-white"></i>
                </div>
                <div>
                  <h5 class="font-16">Scope 3 Indirect External</h5>
                </div>
                <h3 class="mt-4">100KT CO<sup>2</sup></h3>
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
                  Improved by <span class="float-right">9%</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-6">
            <div class="card m-b-30">
              <div class="card-body">
                <h4 class="mt-0 header-title mb-4">Energy Consumption</h4>

                <apexcharts
                  width="500"
                  height="350"
                  type="bar"
                  :options="chartOptions"
                  :series="series"
                ></apexcharts>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="card m-b-30">
              <div class="card-body">
                <h4 class="mt-0 header-title mb-4">Diesel Consumption</h4>

                <apexcharts
                  width="500"
                  height="350"
                  type="bar"
                  :options="chartOptions2"
                  :series="series2"
                ></apexcharts>
              </div>
            </div>
          </div>
          <!-- end col -->

          <!-- end col -->
        </div>

        <!-- end row -->

        <!-- START ROW -->
        <!-- <div class="row">
          <div class="col-xl-12">
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

                        <th scope="col">Location</th>
                        <th scope="col" colspan="2">Last Modified</th>
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

                        <td>India</td>
                        <td>10/10/2022</td>
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

                        <td>India</td>
                        <td>10/10/2022</td>
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

                        <td>India</td>
                        <td>10/10/2022</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <!-- 


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

        <h1>test</h1> -->

        <!-- END ROW -->
      </div>
      <!-- container-fluid -->
    </div>
    <!-- content -->
    <!-- <checkbox-svg-map v-model="selectedLocations" :map="Taiwan" /> -->
    <footer class="footer">
      ©2022 Maersk Hackathon
      <span class="d-none d-sm-inline-block">
        <span>- Made with </span>Love <i class="mdi mdi-heart text-danger"></i
      ></span>
    </footer>
  </div>
  <!-- ============================================================== -->
  <!-- End Right content here -->
  <!-- ============================================================== -->
</template>
<script>
  import VueApexCharts from "vue3-apexcharts";
  import "vue-awesome/icons";

  // import Icon from "vue-awesome/components/Icon";

  export default {
    name: "Dashboard",
    props: {
      msg: String,
    },
    components: {
      apexcharts: VueApexCharts,
      // "v-icon": Icon,
    },
    data: function () {
      return {
        fimsuggestionSelected: "",
        chartOptions: {
          chart: {
            id: "basic-bar",
            foreColor: "#FFFFFF",
          },
          xaxis: {
            categories: [
              "GTI",
              "PPV",
              "P400",
              "SSL",
              "SCCT",
              "TC1",
              "VAL",
              "ALR",
            ],
          },
          yaxis: {
            categories: [10, 20, 30, 40, 50, 10, 30],
            labels: {
              formatter: (val) => {
                return val + "K";
              },
            },
          },
        },
        chartOptions2: {
          chart: {
            id: "basic-bar3",
            foreColor: "#FFFFFF",
          },
          colors: ["#c9e423"],
          xaxis: {
            categories: [
              "GTI",
              "PPV",
              "P400",
              "SSL",
              "SCCT",
              "TC1",
              "VAL",
              "ALR",
            ],
          },
        },
        series2: [
          {
            name: "series-1",
            data: [30, 10, 45, 50, 10, 20, 40, 91],
          },
        ],
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
        ],
        options: {},
        seriesdonutscope1: [10, 15, 20, 50], //series -3 is green /renewable , 1-disel red ,2 yellow-electric
        chartOptionsdonutscope1: {
          labels: ["Terminal", "WareHouse", "Container", "Vessel"],
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
        seriesdonutscope2: [45, 20, 20, 15], //series -3 is green /renewable , 1-disel red ,2 yellow-electric
        chartOptionsdonutscope2: {
          labels: ["Terminal", "WareHouse", "Container", "Vessel"],
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
        seriesdonutscope3: [45, 20, 20, 15], //series -3 is green /renewable , 1-disel red ,2 yellow-electric
        chartOptionsdonutscope3: {
          labels: ["Suppliers", "Service Providers", "Vendors", "IT"],
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
                return val + "°C";
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
            // foreColor: "#FFFFFF",
            background: "#fff",
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                total: {
                  enabled: true,
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
      };
    },
    methods: {
      fimsuggestion(event) {
        event.preventDefault();
        console.log(event.target.innerText, "name");
        this.fimsuggestionSelected = event.target.innerText;
      },
    },
    computed: {
      renderfimDescription() {
        if (
          this.fimsuggestionSelected ===
          "Rubber Tyred Gantry Crane Optimization"
        ) {
          return "Concept of substituting less efficient big capacity Diesel Generator, which used to feed the RTG power during operation with an energy storage battery system & better efficient smaller capacity Diesel Generator to provide a positive recharge cycle, which means DG will be used for only charging the batteries to compensate the loss of energy on account of “RTG electro-mechanical overall efficiency";
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
