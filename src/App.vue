<template>
  <!-- Begin page -->
  <div id="wrapper">
    <!-- Top Bar Start -->
    <div class="topbar">
      <!-- LOGO -->
      <div class="topbar-left">
        <a href="#" class="logo">
          <span class="logo-light">
            <img
              src="https://w0.peakpx.com/wallpaper/134/814/HD-wallpaper-maersk-logo-maersk-line-merchant-navy.jpg"
              height="30"
              width="30"
            />
            Maersk
          </span>
          <span class="logo-sm">
            <i class="mdi mdi-camera-control"></i>
          </span>
        </a>
      </div>

      <nav class="navbar-custom">
        <ul class="navbar-right list-inline float-right mb-0">
          <!-- language-->
          <li
            class="dropdown notification-list list-inline-item d-none d-md-inline-block"
          >
            <a
              class="nav-link dropdown-toggle arrow-none waves-effect"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img
                src="assets/images/us_flag.jpg"
                class="mr-2"
                height="12"
                alt=""
              />
              English <span class="mdi mdi-chevron-down"></span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right dropdown-menu-animated language-switch"
            >
              <a class="dropdown-item" href="#"
                ><img
                  src="assets/images/french_flag.jpg"
                  alt=""
                  height="16"
                /><span> French </span></a
              >
              <a class="dropdown-item" href="#"
                ><img
                  src="assets/images/spain_flag.jpg"
                  alt=""
                  height="16"
                /><span> Spanish </span></a
              >
              <a class="dropdown-item" href="#"
                ><img
                  src="assets/images/russia_flag.jpg"
                  alt=""
                  height="16"
                /><span> Russian </span></a
              >
              <a class="dropdown-item" href="#"
                ><img
                  src="assets/images/germany_flag.jpg"
                  alt=""
                  height="16"
                /><span> German </span></a
              >
              <a class="dropdown-item" href="#"
                ><img
                  src="assets/images/italy_flag.jpg"
                  alt=""
                  height="16"
                /><span> Italian </span></a
              >
            </div>
          </li>

          <!-- full screen -->
          <li
            class="dropdown notification-list list-inline-item d-none d-md-inline-block"
          >
            <a class="nav-link waves-effect" href="#" id="btn-fullscreen">
              <i class="mdi mdi-arrow-expand-all noti-icon"></i>
            </a>
          </li>

          <!-- notification -->
          <li class="dropdown notification-list list-inline-item">
            <a
              class="nav-link dropdown-toggle arrow-none waves-effect"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i class="mdi mdi-bell-outline noti-icon"></i>
              <span class="badge badge-pill badge-danger noti-icon-badge"
                >3</span
              >
            </a>
            <div
              class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-lg px-1"
            >
              <!-- item-->
              <h6 class="dropdown-item-text">Notifications</h6>
              <div class="slimscroll notification-item-list">
                <!-- item-->
                <a
                  href="javascript:void(0);"
                  class="dropdown-item notify-item active"
                >
                  <div class="notify-icon bg-success">
                    <i class="mdi mdi-cart-outline"></i>
                  </div>
                  <p class="notify-details">
                    <b>Your order is placed</b
                    ><span class="text-muted"
                      >Dummy text of the printing and typesetting
                      industry.</span
                    >
                  </p>
                </a>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon bg-danger">
                    <i class="mdi mdi-message-text-outline"></i>
                  </div>
                  <p class="notify-details">
                    <b>New Message received</b
                    ><span class="text-muted">You have 87 unread messages</span>
                  </p>
                </a>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon bg-info">
                    <i class="mdi mdi-filter-outline"></i>
                  </div>
                  <p class="notify-details">
                    <b>Your item is shipped</b
                    ><span class="text-muted"
                      >It is a long established fact that a reader will</span
                    >
                  </p>
                </a>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon bg-success">
                    <i class="mdi mdi-message-text-outline"></i>
                  </div>
                  <p class="notify-details">
                    <b>New Message received</b
                    ><span class="text-muted">You have 87 unread messages</span>
                  </p>
                </a>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon bg-warning">
                    <i class="mdi mdi-cart-outline"></i>
                  </div>
                  <p class="notify-details">
                    <b>Your order is placed</b
                    ><span class="text-muted"
                      >Dummy text of the printing and typesetting
                      industry.</span
                    >
                  </p>
                </a>
              </div>
              <!-- All-->
              <a
                href="javascript:void(0);"
                class="dropdown-item text-center notify-all text-primary"
              >
                View all <i class="fi-arrow-right"></i>
              </a>
            </div>
          </li>

          <li class="dropdown notification-list list-inline-item">
            <div class="dropdown notification-list nav-pro-img">
              <a
                class="dropdown-toggle nav-link arrow-none nav-user"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img
                  src="assets/images/Maersk.png"
                  alt="user"
                  class="rounded-circle"
                />
              </a>
              <div class="dropdown-menu dropdown-menu-right profile-dropdown">
                <!-- item-->
                <a class="dropdown-item" href="#"
                  ><i class="mdi mdi-account-circle"></i> Profile</a
                >
                <a class="dropdown-item" href="#"
                  ><i class="mdi mdi-wallet"></i> Wallet</a
                >
                <a class="dropdown-item d-block" href="#"
                  ><span class="badge badge-success float-right">11</span
                  ><i class="mdi mdi-settings"></i> Settings</a
                >
                <a class="dropdown-item" href="#"
                  ><i class="mdi mdi-lock-open-outline"></i> Lock screen</a
                >
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-danger" href="#"
                  ><i class="mdi mdi-power text-danger"></i> Logout</a
                >
              </div>
            </div>
          </li>
        </ul>

        <ul class="list-inline menu-left mb-0">
          <li class="float-left">
            <button class="button-menu-mobile open-left waves-effect">
              <i class="mdi mdi-menu"></i>
            </button>
          </li>
          <li class="d-none d-md-inline-block">
            <form role="search" class="app-search">
              <div class="form-group mb-0">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search.."
                />
                <button type="submit"><i class="fa fa-search"></i></button>
              </div>
            </form>
          </li>
        </ul>
      </nav>
    </div>
    <!-- Top Bar End -->

    <!-- ========== Left Sidebar Start ========== -->
    <div class="left side-menu">
      <div class="slimscroll-menu" id="remove-scroll">
        <!--- Sidemenu -->
        <div id="sidebar-menu">
          <!-- Left Menu Start -->
          <ul class="metismenu" id="side-menu">
            <li class="menu-title">Zero Emission Pathway</li>
            <!-- <li>
              <a href="#" class="waves-effect">
                <i class="icon-accelerator"></i
                ><span class="badge badge-success badge-pill float-right"
                  >9+</span
                >
                <span> Dashboard </span>
              </a>
            </li> -->

            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><img
                  src="https://e7.pngegg.com/pngimages/722/746/png-clipart-crane-architectural-engineering-computer-icons-infographic-port-terminal-infographic-angle-thumbnail.png"
                  height="10" /><span>
                  Terminal
                  <span class="float-right menu-arrow"
                    ><i class="mdi mdi-chevron-right"></i
                  ></span> </span
              ></a>
              <ul class="submenu">
                <li>
                  <a href="#"
                    >GTI
                    <span class="float-right menu-arrow"
                      ><i class="mdi mdi-chevron-right"></i></span
                  ></a>
                  <ul class="submenu">
                    <li>
                      <a
                        href="#"
                        @click="selectedItem"
                        class="waves-effect"
                        aria-label="TERMINAL-GTI-QC"
                      >
                        <span class="waves-effect">
                          QC
                          <span class="float-right menu-arrow"></span> </span
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        @click="selectedItem"
                        class="waves-effect"
                        aria-label="TERMINAL-GTI-RMGC"
                      >
                        <span class="waves-effect">
                          RMGC
                          <span class="float-right menu-arrow"></span> </span
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        @click="selectedItem"
                        class="waves-effect"
                        aria-label="TERMINAL-GTI-RTG"
                      >
                        <span class="waves-effect">
                          RTG
                          <span class="float-right menu-arrow"></span> </span
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        @click="selectedItem"
                        class="waves-effect"
                        aria-label="TERMINAL-GTI-TT"
                      >
                        <span class="waves-effect">
                          TT
                          <span class="float-right menu-arrow"></span> </span
                      ></a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#"
                    >PPV
                    <span class="float-right menu-arrow"
                      ><i class="mdi mdi-chevron-right"></i></span
                  ></a>
                  <ul class="submenu">
                    <li>
                      <a
                        href="#"
                        @click="selectedItem"
                        class="waves-effect"
                        aria-label="TERMINAL-PPV-STS"
                      >
                        <span class="waves-effect">
                          STS
                          <span class="float-right menu-arrow"></span> </span
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        @click="selectedItem"
                        class="waves-effect"
                        aria-label="TERMINAL-P400-SC"
                      >
                        <span class="waves-effect">
                          RMGC
                          <span class="float-right menu-arrow"></span> </span
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        @click="selectedItem"
                        class="waves-effect"
                        aria-label="TERMINAL-PPV-ERTG"
                      >
                        <span class="waves-effect">
                          ERTG
                          <span class="float-right menu-arrow"></span> </span
                      ></a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#"
                    >P400
                    <span class="float-right menu-arrow"
                      ><i class="mdi mdi-chevron-right"></i></span
                  ></a>
                  <ul class="submenu">
                    <li>
                      <a
                        href="#"
                        @click="selectedItem"
                        class="waves-effect"
                        aria-label="TERMINAL-P400-QC"
                      >
                        <span class="waves-effect">
                          QC
                          <span class="float-right menu-arrow"></span> </span
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        @click="selectedItem"
                        class="waves-effect"
                        aria-label="TERMINAL-P400-SC"
                      >
                        <span class="waves-effect">
                          SC
                          <span class="float-right menu-arrow"></span> </span
                      ></a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#"
                    >SLL
                    <span class="float-right menu-arrow"
                      ><i class="mdi mdi-chevron-right"></i></span
                  ></a>
                  <ul class="submenu">
                    <li>
                      <a
                        href="#"
                        @click="selectedItem"
                        class="waves-effect"
                        aria-label="TERMINAL-SLL-QC"
                      >
                        <span class="waves-effect">
                          QC
                          <span class="float-right menu-arrow"></span> </span
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        @click="selectedItem"
                        class="waves-effect"
                        aria-label="TERMINAL-SLL-RTG"
                      >
                        <span class="waves-effect">
                          RTG
                          <span class="float-right menu-arrow"></span> </span
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        @click="selectedItem"
                        class="waves-effect"
                        aria-label="TERMINAL-SLL-TT"
                      >
                        <span class="waves-effect">
                          TT
                          <span class="float-right menu-arrow"></span> </span
                      ></a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" class="waves-effect"
                ><i class="icon-paper-sheet"></i
                ><span>
                  Assets
                  <span class="float-right menu-arrow"
                    ><i class="mdi mdi-chevron-right"></i
                  ></span> </span
              ></a>
              <ul class="submenu">
                <li>
                  <a href="#" @click="selectedItem" aria-label="Assets-QC"
                    >QC</a
                  >
                </li>
                <li><a href="#">RTG</a></li>
                <li><a href="#">TT</a></li>
                <li><a href="#">ARMG</a></li>
                <li><a href="#">SC</a></li>
                <li><a href="#">SQC</a></li>
                <li><a href="#">EH</a></li>
                <li><a href="#">RS</a></li>
                <li><a href="#">SV</a></li>
                <li><a href="#">AGV</a></li>
                <li><a href="#">RGC</a></li>
                <li><a href="#">TL</a></li>
                <li><a href="#">RMGC</a></li>
                <li><a href="#">FL</a></li>
                <li><a href="#">HOPPER</a></li>
                <li><a href="#">MHC</a></li>
                <li><a href="#">MHP</a></li>
                <li><a href="#">GENERIC</a></li>
              </ul>
            </li>
            <!-- <li class="menu-title">Components</li>

            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><i class="icon-pencil-ruler"></i>
                <span>
                  UI Elements
                  <span class="float-right menu-arrow"
                    ><i class="mdi mdi-chevron-right"></i
                  ></span>
                </span>
              </a>
              <ul class="submenu">
                <li><a href="#">Alerts</a></li>
                <li><a href="#">Badge</a></li>
              </ul>
            </li>

            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><i class="icon-diamond"></i>
                <span>
                  Advanced UI
                  <span class="float-right menu-arrow"
                    ><i class="mdi mdi-chevron-right"></i
                  ></span>
                </span>
              </a>
              <ul class="submenu">
                <li><a href="#">Alertify</a></li>
                <li><a href="#">Rating</a></li>
              </ul>
            </li>

            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><i class="icon-todolist-check"></i
                ><span>
                  Forms
                  <span class="badge badge-pill badge-danger float-right"
                    >8</span
                  >
                </span></a
              >
              <ul class="submenu">
                <li><a href="#">Form Elements</a></li>
                <li><a href="#">Form Validation</a></li>
              </ul>
            </li>

            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><i class="icon-graph"></i
                ><span>
                  Charts
                  <span class="float-right menu-arrow"
                    ><i class="mdi mdi-chevron-right"></i
                  ></span> </span
              ></a>
              <ul class="submenu">
                <li><a href="#">Morris Chart</a></li>
                <li><a href="#">Chartist Chart</a></li>
                <li><a href="#">Chartjs Chart</a></li>
                <li><a href="#">Flot Chart</a></li>
                <li><a href="#">C3 Chart</a></li>
                <li><a href="#">Jquery Knob Chart</a></li>
              </ul>
            </li>

            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><i class="icon-spread"></i
                ><span>
                  Tables
                  <span class="float-right menu-arrow"
                    ><i class="mdi mdi-chevron-right"></i
                  ></span> </span
              ></a>
              <ul class="submenu">
                <li><a href="#">Basic Tables</a></li>
                <li><a href="#">Data Table</a></li>
              </ul>
            </li>

            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><i class="icon-coffee"></i>
                <span>
                  Icons
                  <span class="float-right menu-arrow"
                    ><i class="mdi mdi-chevron-right"></i></span
                ></span>
              </a>
              <ul class="submenu">
                <li><a href="#">Material Design</a></li>
                <li><a href="#">Font Awesome</a></li>
              </ul>
            </li>

            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><i class="icon-map"></i
                ><span>
                  Maps
                  <span class="float-right menu-arrow"
                    ><i class="mdi mdi-chevron-right"></i
                  ></span> </span
              ></a>
              <ul class="submenu">
                <li><a href="#"> Google Map</a></li>
                <li><a href="#"> Vector Map</a></li>
              </ul>
            </li>

            <li>
              <a href="javascript:void(0);" class="waves-effect"
                ><i class="icon-share"></i
                ><span>
                  Multi Level
                  <span class="float-right menu-arrow"
                    ><i class="mdi mdi-chevron-right"></i
                  ></span> </span
              ></a>
              <ul class="submenu">
                <li><a href="#"> Menu 1</a></li>
                <li>
                  <a href="#"
                    >Menu 2
                    <span class="float-right menu-arrow"
                      ><i class="mdi mdi-chevron-right"></i></span
                  ></a>
                  <ul class="submenu">
                    <li><a href="#">Menu 2.1</a></li>
                    <li><a href="#">Menu 2.1</a></li>
                  </ul>
                </li>
              </ul>
            </li> -->
          </ul>
        </div>
        <!-- Sidebar -->
        <div class="clearfix"></div>
      </div>
      <!-- Sidebar -left -->
    </div>
    <!-- Left Sidebar End -->

    <!-- ============================================================== -->
    <!-- Start right Content here -->
    <!-- ============================================================== -->
    <Dashboard :msg="selected" v-if="selected === ''" />
    <Dashboard :msg="selected" v-if="selected === 'TERMINAL-GTI-QC'" />
    <DashboardTerminalPPVSTSvue
      :msg="selected"
      v-if="selected === 'TERMINAL-PPV-STS'"
    />
    <DashboardTerminalAssetsQC
      :msg="selected"
      v-if="selected === 'Assets-QC'"
    />

    <!-- ============================================================== -->
    <!-- End Right content here -->
    <!-- ============================================================== -->
  </div>
  <!-- END wrapper -->
</template>

<script>
  import Dashboard from "./Dashboard.vue";
  import DashboardTerminalPPVSTSvue from "./DashboardTerminalPPVSTS.vue";
  import DashboardTerminalAssetsQC from "./DashboardTerminalAssetsQC.vue";
  // import DashboardTerminalRMGC from "./Dashboard.vue";
  export default {
    components: {
      Dashboard,
      DashboardTerminalPPVSTSvue,
      DashboardTerminalAssetsQC,
      // DashboardTerminalRMGC,
    },
    data() {
      return {
        selected: "",
      };
    },
    methods: {
      selectedItem(name) {
        this.selected = "";
        console.log(name, "name");
        console.log(name.target, "name");
        this.selected = name.target.ariaLabel;
        console.log(this.selected, "data");
      },
      computed: {
        renderDashboard(type) {
          console.log(type);
          return true;
        },
      },
    },
  };
</script>

<style src="vue-svg-map/dist/index.css"></style>
