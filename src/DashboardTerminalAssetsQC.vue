<template>
  <!-- ============================================================== -->
  <!-- Start right Content here -->
  <!-- ============================================================== -->
  <div>
    <!-- Start content -->
    <div class="content">
      <div class="container-fluid">
        <!-- end page-title -->

        <!-- end row -->

        <!-- START ROW -->
        <div class="row qc-container">
          <div class="col-xl-12">
            <div class="card m-b-30">
              <div class="card-body">
                <h4 class="mt-0 header-title mb-4">Supplier Emission Status</h4>
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Manufacturer</th>
                        <th scope="col">Scope 1 (tCo2e)</th>
                        <th scope="col">Scope 2 (Market based tCo2e)</th>
                        <th scope="col">Scope 3 (Suppliers)</th>

                        <th scope="col">Total Emissions</th>
                        <th scope="col">Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a
                            href="https://www.cargotec.com/en/sustainability/sustainability-at-our-company/performance/"
                            target="_blank"
                            >Kalmar</a
                          >
                        </td>
                        <td>
                          <span>21,300</span>
                        </td>
                        <td>
                          <div>20,200</div>
                        </td>
                        <td>6139000</td>

                        <td>6180500</td>
                        <td>2021</td>
                      </tr>

                      <tr>
                        <td>
                          <a
                            href="https://investors.konecranes.com/sites/default/files/AR2021/sustainability_report_2021.pdf"
                            target="_blank"
                            >Konecranes</a
                          >
                        </td>
                        <td>
                          <span>44500</span>
                        </td>
                        <td>
                          <div>14400</div>
                        </td>
                        <td>5158600</td>

                        <td>5217500</td>
                        <td>2021</td>
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
  </div>
  <!-- ============================================================== -->
  <!-- End Right content here -->
  <!-- ============================================================== -->
</template>
<script>
  // import VueApexCharts from "vue3-apexcharts";

  // import Icon from "vue-awesome/components/Icon";

  export default {
    name: "DashboardTerminalAssetsQC",
    props: {
      msg: String,
    },
    components: {},
    data: function () {
      return {
        fimsuggestionSelected: "",
        showModal: false,
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
        seriesdonut: [44, 55, 41, 17, 15],
        chartOptionsdonut: {
          chart: {
            type: "donut",
            foreColor: "#FFFFFF",
          },
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
            name: "Marine Sprite",
            data: [44, 55, 41, 37, 22, 43, 21],
          },
          {
            name: "Striking Calf",
            data: [53, 32, 33, 52, 13, 43, 32],
          },
          {
            name: "Tank Picture",
            data: [12, 17, 11, 9, 15, 11, 20],
          },
          {
            name: "Bucket Slope",
            data: [9, 7, 5, 8, 6, 9, 4],
          },
          {
            name: "Reborn Kid",
            data: [25, 12, 19, 32, 25, 24, 10],
          },
        ],
        chartOptionsstacked: {
          title: {
            text: "hello",
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
            height: 350,
            stacked: true,
            foreColor: "#FFFFFF",
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
            categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
            labels: {
              formatter: function (val) {
                return val + "K";
              },
            },
          },
          yaxis: {
            title: {
              text: "test",
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

      renderModal() {
        event.preventDefault();
        this.showModal = true;
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
