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

        <div class="row">
          <div class="col-sm-6 col-xl-3">
            <div class="card">
              <div class="card-heading p-4">
                <div class="mini-stat-icon float-right">
                  <i class="mdi mdi-cube-outline bg-primary text-white"></i>
                </div>
                <div>
                  <h5 class="font-16">Average Yearly Consumption</h5>
                </div>
                <h3 class="mt-4">43,227</h3>
                <div class="progress mt-4" style="height: 4px">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 75%"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p class="text-muted mt-2 mb-0">
                  Total Cost of Energy<span class="float-right">75%</span>
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
                  <h5 class="font-16">Score</h5>
                </div>
                <h3 class="mt-4">$73,265</h3>
                <div class="progress mt-4" style="height: 4px">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style="width: 88%"
                    aria-valuenow="88"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p class="text-muted mt-2 mb-0">
                  Previous period<span class="float-right">88%</span>
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
                  <h5 class="font-16">
                    Average Yearly C0<sup>2</sup> Emission
                  </h5>
                </div>
                <h3 class="mt-4">447</h3>
                <div class="progress mt-4" style="height: 4px">
                  <div
                    class="progress-bar bg-warning"
                    role="progressbar"
                    style="width: 68%"
                    aria-valuenow="68"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p class="text-muted mt-2 mb-0">
                  Previous period<span class="float-right">68%</span>
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
                <h3 class="mt-4">86%</h3>
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
                  Previous period<span class="float-right">10%</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-8">
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
                <h4 class="mt-0 header-title mb-4">FIM Suggestions</h4>
                <div class="friends-suggestions">
                  <a href="#" class="friends-suggestions-list">
                    <div class="border-bottom position-relative">
                      <div class="float-left mb-0 mr-3">
                        <img
                          src="assets/images/user-2.jpg"
                          alt=""
                          class="rounded-circle thumb-md"
                        />
                      </div>
                      <div class="suggestion-icon float-right mt-2 pt-1">
                        <i class="mdi mdi-plus"></i>
                      </div>

                      <div class="desc">
                        <h5 class="font-14 mb-1 pt-2">Ralph Ramirez</h5>
                        <p class="text-muted">3 Friend suggest</p>
                      </div>
                    </div>
                  </a>

                  <a href="#" class="friends-suggestions-list">
                    <div class="border-bottom position-relative">
                      <div class="float-left mb-0 mr-3">
                        <img
                          src="assets/images/user-3.jpg"
                          alt=""
                          class="rounded-circle thumb-md"
                        />
                      </div>
                      <div class="suggestion-icon float-right mt-2 pt-1">
                        <i class="mdi mdi-plus"></i>
                      </div>

                      <div class="desc">
                        <h5 class="font-14 mb-1 pt-2">Patrick Beeler</h5>
                        <p class="text-muted">17 Friend suggest</p>
                      </div>
                    </div>
                  </a>

                  <a href="#" class="friends-suggestions-list">
                    <div class="border-bottom position-relative">
                      <div class="float-left mb-0 mr-3">
                        <img
                          src="assets/images/user-4.jpg"
                          alt=""
                          class="rounded-circle thumb-md"
                        />
                      </div>
                      <div class="suggestion-icon float-right mt-2 pt-1">
                        <i class="mdi mdi-plus"></i>
                      </div>

                      <div class="desc">
                        <h5 class="font-14 mb-1 pt-2">Victor Zamora</h5>
                        <p class="text-muted">12 Friend suggest</p>
                      </div>
                    </div>
                  </a>

                  <a href="#" class="friends-suggestions-list">
                    <div class="border-bottom position-relative">
                      <div class="float-left mb-0 mr-3">
                        <img
                          src="assets/images/user-5.jpg"
                          alt=""
                          class="rounded-circle thumb-md"
                        />
                      </div>
                      <div class="suggestion-icon float-right mt-2 pt-1">
                        <i class="mdi mdi-plus"></i>
                      </div>

                      <div class="desc">
                        <h5 class="font-14 mb-1 pt-2">Bryan Lacy</h5>
                        <p class="text-muted">18 Friend suggest</p>
                      </div>
                    </div>
                  </a>

                  <a href="#" class="friends-suggestions-list">
                    <div class="position-relative">
                      <div class="float-left mb-0 mr-3">
                        <img
                          src="assets/images/user-6.jpg"
                          alt=""
                          class="rounded-circle thumb-md"
                        />
                      </div>
                      <div class="suggestion-icon float-right mt-2 pt-1">
                        <i class="mdi mdi-plus"></i>
                      </div>

                      <div class="desc">
                        <h5 class="font-14 mb-1 pt-2">James Sorrells</h5>
                        <p class="text-muted mb-1">6 Friend suggest</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-4">
            <div class="card m-b-30">
              <div class="card-body">
                <h4 class="mt-0 header-title mb-4">FIM Description</h4>
                <!-- <div
                  id="morris-line-example"
                  class="morris-chart"
                  style="height: 360px"
                ></div> -->
              </div>
            </div>
          </div>

          <div class="col-xl-4">
            <div class="card m-b-30">
              <div class="card-body">
                <h4 class="mt-0 header-title mb-4">Recent Activity</h4>
                <ol class="activity-feed mb-0">
                  <li class="feed-item">
                    <div class="feed-item-list">
                      <p class="text-muted mb-1">Now</p>
                      <p class="font-15 mt-0 mb-0">
                        Jassa magna Jassa, risus posted a new article:
                        <b class="text-primary">Forget UX Rowland</b>
                      </p>
                    </div>
                  </li>
                  <li class="feed-item">
                    <p class="text-muted mb-1">Yesterday</p>
                    <p class="font-15 mt-0 mb-0">
                      Jassa posted a new article:
                      <b class="text-primary">Designer Alex</b>
                    </p>
                  </li>
                  <li class="feed-item">
                    <p class="text-muted mb-1">2:30PM</p>
                    <p class="font-15 mt-0 mb-0">
                      Jassa, Jassa, Jassa Commented
                      <b class="text-primary"> Developer Moreno</b>
                    </p>
                  </li>
                  <li class="feed-item pb-1">
                    <p class="text-muted mb-1">12:48 PM</p>
                    <p class="font-15 mt-0 mb-2">
                      Jassa, Jassa Commented
                      <b class="text-primary">UX Murphy</b>
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
                        <th scope="col">Count</th>
                        <!-- <th scope="col">Contact</th>
                        <th scope="col">Location</th>
                        <th scope="col" colspan="2">Date</th> -->
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Jassa</td>
                        <td>
                          <span class="badge badge-success">Delivered</span>
                        </td>
                        <td>$9,420,000</td>
                        <td>
                          <div>
                            <img
                              src="assets/images/user-2.jpg"
                              alt=""
                              class="thumb-md rounded-circle mr-2"
                            />
                            Jassa
                          </div>
                        </td>
                        <td>Ludhiana</td>
                        <td>15/1/2021</td>

                        <td>
                          <div>
                            <a href="#" class="btn btn-primary btn-sm">Edit</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Jassa</td>
                        <td>
                          <span class="badge badge-warning">Pending</span>
                        </td>
                        <td>$3,120,000</td>
                        <td>
                          <div>
                            <img
                              src="assets/images/user-3.jpg"
                              alt=""
                              class="thumb-md rounded-circle mr-2"
                            />
                            Jassa
                          </div>
                        </td>
                        <td>Ludhiana</td>
                        <td>16/1/2021</td>

                        <td>
                          <div>
                            <a href="#" class="btn btn-primary btn-sm">Edit</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Jassa</td>
                        <td>
                          <span class="badge badge-success">Delivered</span>
                        </td>
                        <td>$6,360,000</td>
                        <td>
                          <div>
                            <img
                              src="assets/images/user-4.jpg"
                              alt=""
                              class="thumb-md rounded-circle mr-2"
                            />
                            Jassa
                          </div>
                        </td>
                        <td>Ludhiana</td>
                        <td>17/1/2021</td>

                        <td>
                          <div>
                            <a href="#" class="btn btn-primary btn-sm">Edit</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Jassa</td>
                        <td>
                          <span class="badge badge-danger">Cancel</span>
                        </td>
                        <td>$5,200,000</td>
                        <td>
                          <div>
                            <img
                              src="assets/images/user-5.jpg"
                              alt=""
                              class="thumb-md rounded-circle mr-2"
                            />
                            Jassa
                          </div>
                        </td>
                        <td>Ludhiana</td>
                        <td>18/1/2021</td>

                        <td>
                          <div>
                            <a href="#" class="btn btn-primary btn-sm">Edit</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Jassa</td>
                        <td>
                          <span class="badge badge-success">Delivered</span>
                        </td>
                        <td>$7,250,000</td>
                        <td>
                          <div>
                            <img
                              src="assets/images/user-6.jpg"
                              alt=""
                              class="thumb-md rounded-circle mr-2"
                            />
                            Jassa
                          </div>
                        </td>
                        <td>Ludhiana</td>
                        <td>19/1/2021</td>

                        <td>
                          <div>
                            <a href="#" class="btn btn-primary btn-sm">Edit</a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

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
        <h1>test</h1>

        <!-- END ROW -->
      </div>
      <!-- container-fluid -->
    </div>
    <!-- content -->
    <!-- <checkbox-svg-map v-model="selectedLocations" :map="Taiwan" /> -->
    <footer class="footer">
      ©2022 Maersk Hackathon
      <span class="d-none d-sm-inline-block">
        - Love <i class="mdi mdi-heart text-danger"></i> by
        Therichpost.com</span
      >.
    </footer>
  </div>
  <!-- ============================================================== -->
  <!-- End Right content here -->
  <!-- ============================================================== -->
</template>
<script>
  import VueApexCharts from "vue3-apexcharts";

  export default {
    name: "Dashboard",
    props: {
      msg: String,
    },
    components: {
      apexcharts: VueApexCharts,
    },
    data: function () {
      return {
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
          chart: {
            type: "bar",
            height: 350,
            stacked: true,
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
        },
      };
    },
  };
</script>
