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
          <div class="col-sm-6 col-xl-3">
            <div class="card">
              <div class="card-heading p-4">
                <div class="mini-stat-icon float-right">
                  <i class="mdi mdi-cube-outline bg-primary text-white"></i>
                </div>
                <div>
                  <h5 class="font-16">Total Yearly Electricity Consumption</h5>
                </div>
                <h3 class="mt-4">17M KWH</h3>
                <div class="progress mt-4" style="height: 4px">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 5%"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p class="text-muted mt-2 mb-0">
                  Reduced by <span class="float-right">5%</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-xl-3">
            <div class="card">
              <div class="card-heading p-4">
                <div class="mini-stat-icon float-right">
                  <i class="mdi mdi-briefcase-check bg-success text-white"></i>
                </div>
                <div>
                  <h5 class="font-16">Green Energy Score</h5>
                </div>
                <h3 class="mt-4">80/100</h3>
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

          <div class="col-sm-6 col-xl-3">
            <div class="card">
              <div class="card-heading p-4">
                <div class="mini-stat-icon float-right">
                  <i class="mdi mdi-tag-text-outline bg-warning text-white"></i>
                </div>
                <div>
                  <h5 class="font-16">Total Yearly C0<sup>2</sup> Emission</h5>
                </div>
                <h3 class="mt-4">200M TONNES</h3>
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

          <div class="col-sm-6 col-xl-3">
            <div class="card">
              <div class="card-heading p-4">
                <div class="mini-stat-icon float-right">
                  <i class="mdi mdi-buffer bg-danger text-white"></i>
                </div>
                <div>
                  <h5 class="font-16">Zero Emission Initiatives</h5>
                </div>
                <h3 class="mt-4">3</h3>
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
                <h4 class="mt-0 header-title mb-4">Energy Consumption</h4>
                <apexcharts
                  type="bar"
                  height="350"
                  :options="chartOptionsstacked"
                  :series="seriesstacked"
                />
                <!-- <div
                  id="morris-area-example"
                  class="morris-charts morris-chart-height"
                ></div> -->
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="card m-b-30">
              <div class="card-body">
                <h4 class="mt-0 header-title mb-4">Fuel Consumption</h4>
                <apexcharts
                  type="bar"
                  height="350"
                  :options="chartOptionsstackedfuel"
                  :series="seriesstackedfuel"
                />
                <!-- <div
                  id="morris-area-example"
                  class="morris-charts morris-chart-height"
                ></div> -->
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
                          Crane Optimization
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
                          HVAC Control/Building Automation
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
                          Exterior Lighting Control
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
                      <p class="text-muted mb-1"></p>
                      <p class="font-15 mt-0 mb-0">
                        {{ renderfimbenefitsitemone }}
                      </p>
                    </div>
                  </li>
                  <li class="feed-item">
                    <p class="text-muted mb-1"></p>
                    <p class="font-15 mt-0 mb-0">
                      {{ renderfimbenefitsitemtwo }}
                    </p>
                  </li>
                  <li class="feed-item">
                    <p class="font-15 mt-0 mb-0">
                      {{ renderfimbenefitsitemthree }}
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <!-- START ROW -->
        <div class="row">
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
                        <td>Ship-to-shore (STS)</td>
                        <td>
                          <span>Electric</span>
                        </td>
                        <td>
                          <div class="circle-green"></div>
                        </td>
                        <td>8</td>

                        <td>India</td>
                        <td>31/10/2022</td>
                      </tr>
                      <tr>
                        <td>Rail Mounted Gantry Crane - RMGC</td>
                        <td>
                          <span> Electric</span>
                        </td>
                        <td>
                          <div class="circle-green"></div>
                        </td>
                        <td>4</td>

                        <td>India</td>
                        <td>31/10/2022</td>
                      </tr>
                      <tr>
                        <td>Electrified Rubber Tired Gantry - ERTG</td>
                        <td>
                          <span>Electric</span>
                        </td>
                        <td>
                          <div class="circle-green"></div>
                        </td>
                        <td>7</td>

                        <td>India</td>
                        <td>31/10/2022</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        seriesdonut: [3, 57, 40], //series -3 is green /renewable , 1-disel red ,2 yellow-electric
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
        seriesstackedfuel: [
          {
            name: "Diesel Consumption(Litres)",
            data: [2300, 4545, 3433, 4354, 3433, 3243, 3453],
          },
        ],
        seriesstacked: [
          {
            name: "Reefer Electricity Consumption (KWH)",
            data: [20003, 12345, 45533, 45533, 55644, 23434, 35553],
          },
          {
            name: "Other Electricity Consuption (KWH)",
            data: [23423, 45333, 54453, 45444, 45544, 45443, 44433],
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
              // color: "#263238",
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

          colors: ["#2E93fA"],
          style: {
            fontSize: "14px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold",
            // colors: "#2E93fA",
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
                  // enabled: true,
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
        if (this.fimsuggestionSelected === "Crane Optimization") {
          return "identified several measures to optimize the energy consumption of the cranes -AC Control, Motor Heater Control, Replace Service Brakes, Replace Spreader Cable Reel Motor";
        } else if (
          this.fimsuggestionSelected === "HVAC Control/Building Automation"
        ) {
          return "Installing a new building automation system (BAS) to integrate with the thermostats being provided with the new equipment. This will allow monitoring of the HVAC systems from a centralized dashboard. Additionally, schedules and setpoints can be adjusted at the building automation system front end and pushed to the individual thermostats. This will facilitate optimization of setpoints, and equipment operating schedules based on actual occupancy of building spaces.";
        } else if (this.fimsuggestionSelected === "Exterior Lighting Control") {
          return "Replacing the original high pressure sodium fixtures with new LED fixtures. This measure is a quantification of the savings potential. Additional savings can be captured through the dimming feature in other areas.";
        }
        return "";
      },
      renderfimbenefitsitemone() {
        if (this.fimsuggestionSelected === "Crane Optimization") {
          return "Energy Cost Savings";
        } else if (
          this.fimsuggestionSelected === "HVAC Control/Building Automation"
        ) {
          return "Energy cost savings";
        } else if (this.fimsuggestionSelected === "Exterior Lighting Control") {
          return "Energy cost savings";
        }
        return "";
      },
      renderfimbenefitsitemtwo() {
        if (this.fimsuggestionSelected === "Crane Optimization") {
          return "Carbon Reduction";
        } else if (
          this.fimsuggestionSelected === "HVAC Control/Building Automation"
        ) {
          return "Optimization of investment";
        } else if (this.fimsuggestionSelected === "Exterior Lighting Control") {
          return "Carbon Reduction";
        }
        return "";
      },
      renderfimbenefitsitemthree() {
        if (this.fimsuggestionSelected === "Crane Optimization") {
          return "Reduce overcooling of E House and PLC room";
        } else if (
          this.fimsuggestionSelected === "HVAC Control/Building Automation"
        ) {
          return " Platform base for future system integration";
        } else if (this.fimsuggestionSelected === "Exterior Lighting Control") {
          return " No implementation costs";
        }
        return "";
      },
    },
  };
</script>
<style scoped>
  .meter {
    box-sizing: content-box;
    width: 30%;
    height: 10px; /* Can be anything */
    position: relative;
    margin: 10px 0 20px 0; /* Just for demo spacing */
    background: #82cd47;
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
