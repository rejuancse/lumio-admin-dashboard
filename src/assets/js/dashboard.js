/*
========================================================================
   BOOTSTRAP 5 ADMIN TEMPLATE - LUMIO ADMIN
   DASHBOARD CORE JAVASCRIPT MODULE
   Developed with premium UI/UX standards

   Template Name: Lumio Admin
   Version: 1.0
   Author: Lumio Admin Team
   Email: hello.lumioadmin@gmail.com
   URL: https://lumioadmin.web.id
========================================================================
*/

import ApexCharts from 'apexcharts';
import flatpickr from 'flatpickr';

// Robust init: works whether the module loads before or after DOMContentLoaded
function initDashboard() {
    // -----------------------------------------------------------------
    // 1. Mobile Sidebar Toggle & Backdrop Overlay
    // -----------------------------------------------------------------
    const sidebar = document.querySelector('.sidebar-wrapper');
    const toggleBtn = document.querySelector('.sidebar-toggle-btn');

    // Create and append backdrop overlay for mobile sidebar
    let overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            sidebar.classList.toggle('show');
            overlay.classList.toggle('show', sidebar.classList.contains('show'));
        });

        // Close sidebar when clicking on backdrop overlay
        overlay.addEventListener('click', function () {
            sidebar.classList.remove('show');
            overlay.classList.remove('show');
        });
    }


    // -----------------------------------------------------------------
    // 2. Revenue Chart (Vertical Bar Chart - Income vs Expenses)
    // -----------------------------------------------------------------
    const revenueChartEl = document.querySelector('#revenue-chart');
    if (revenueChartEl) {
        const revenueChartOptions = {
            series: [
                {
                    name: 'Income',
                    data: [44, 55, 41, 67, 52, 70, 61, 85]
                },
                {
                    name: 'Expenses',
                    data: [23, 33, 30, 48, 34, 45, 40, 45]
                }
            ],
            chart: {
                type: 'bar',
                height: 220,
                stacked: false,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                fontFamily: 'Plus Jakarta Sans, sans-serif'
            },
            colors: ['#072F1F', '#B4F105'], // Dark Green (Income), Lime Green (Expenses)
            states: {
                hover: {
                    filter: {
                        type: 'none'
                    }
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '48%',
                    borderRadius: 0
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            legend: {
                show: false // Custom legends are drawn statically in HTML to match reference layout
            },
            grid: {
                borderColor: '#E9EFEF',
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                },
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                labels: {
                    style: {
                        colors: '#6C7E75',
                        fontSize: '11px',
                        fontWeight: 500
                    }
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: false // Hides absolute numbers to match simplified reference chart style
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + ".000";
                    }
                },
                theme: 'dark'
            }
        };

        const revenueChart = new ApexCharts(revenueChartEl, revenueChartOptions);
        revenueChart.render();
    }

    // -----------------------------------------------------------------
    // 3. Total View Performance Chart (Donut Chart)
    // -----------------------------------------------------------------
    const viewsChartEl = document.querySelector('#views-chart');
    if (viewsChartEl) {
        const viewsChartOptions = {
            series: [68, 23, 16], // View Count (68%), Percentage (23%), Sales (16%)
            chart: {
                type: 'donut',
                height: 250,
                fontFamily: 'Plus Jakarta Sans, sans-serif'
            },
            labels: ['View Count', 'Percentage', 'Sales'],
            colors: ['#B4F105', '#051C12', '#F97316'], // Lime, Forest Dark, Orange
            states: {
                hover: {
                    filter: {
                        type: 'none'
                    }
                }
            },
            legend: {
                show: false // Custom HTML legend used below the chart
            },
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '72%',
                        background: 'transparent',
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '12px',
                                fontWeight: 500,
                                color: '#6C7E75',
                                offsetY: -8
                            },
                            value: {
                                show: true,
                                fontSize: '26px',
                                fontWeight: 800,
                                color: '#0B130F',
                                offsetY: 8,
                                formatter: function (val) {
                                    return val + "%";
                                }
                            },
                            total: {
                                show: true,
                                label: 'Total Count',
                                fontSize: '11px',
                                fontWeight: 500,
                                color: '#6C7E75',
                                formatter: function (w) {
                                    return '565K';
                                }
                            }
                        }
                    }
                }
            },
            tooltip: {
                theme: 'dark'
            }
        };

        const viewsChart = new ApexCharts(viewsChartEl, viewsChartOptions);
        viewsChart.render();
    }

    // -----------------------------------------------------------------
    // 4. Lumioline Charts (Net Income & Total Return)
    // -----------------------------------------------------------------
    const incomeLumioOptions = {
        series: [{
            name: 'Net Income',
            data: [45, 51, 46, 58, 50, 62, 55, 72, 65, 79, 70, 85]
        }],
        chart: {
            type: 'area',
            height: 45,
            lumioline: {
                enabled: true
            },
            fontFamily: 'Plus Jakarta Sans, sans-serif'
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            opacity: 0.1,
            type: 'solid'
        },
        colors: ['#22C55E'], // Green color matching trend-up
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return '';
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

    const returnLumioOptions = {
        series: [{
            name: 'Total Return',
            data: [50, 48, 55, 45, 40, 38, 42, 35, 30, 28, 32, 24]
        }],
        chart: {
            type: 'area',
            height: 45,
            lumioline: {
                enabled: true
            },
            fontFamily: 'Plus Jakarta Sans, sans-serif'
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            opacity: 0.1,
            type: 'solid'
        },
        colors: ['#EF4444'], // Red color matching trend-down
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return '';
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

    const incomeLumioEl = document.querySelector('#income-lumioline');
    if (incomeLumioEl) {
        const incomeLumio = new ApexCharts(incomeLumioEl, incomeLumioOptions);
        incomeLumio.render();
    }

    const returnLumioEl = document.querySelector('#return-lumioline');
    if (returnLumioEl) {
        const returnLumio = new ApexCharts(returnLumioEl, returnLumioOptions);
        returnLumio.render();
    }

    // -----------------------------------------------------------------
    // 5. Flatpickr Date Range Picker Initialization
    // -----------------------------------------------------------------
    const datePickerTrigger = document.querySelector('#date-picker-trigger');
    const selectedRangeText = document.querySelector('#selected-date-range');

    if (datePickerTrigger && selectedRangeText) {
        flatpickr(datePickerTrigger, {
            mode: 'range',
            dateFormat: 'Y-m-d',
            defaultDate: ['2026-01-12', '2026-01-23'],
            onValueUpdate: function (selectedDates, dateStr, instance) {
                if (selectedDates.length === 2) {
                    const startStr = instance.formatDate(selectedDates[0], 'F j, Y');
                    const endStr = instance.formatDate(selectedDates[1], 'F j, Y');
                    selectedRangeText.textContent = `${startStr} - ${endStr}`;
                } else if (selectedDates.length === 1) {
                    const startStr = instance.formatDate(selectedDates[0], 'F j, Y');
                    selectedRangeText.textContent = startStr;
                }
            }
        });
    }

    // -----------------------------------------------------------------
    // 6. Desktop Sidebar Minimize Interaction
    //    NOTE: Handled in React now (src/components/Header.tsx).
    //    Vanilla listeners can't be used here because this module runs
    //    before React renders the DOM, and the Header button remounts
    //    on route changes.
    // -----------------------------------------------------------------

    // -----------------------------------------------------------------
    // 7. Fullscreen Toggle Interaction
    //    NOTE: Handled in React now (src/components/Header.tsx).
    //    Same reason as section 6 above.
    // -----------------------------------------------------------------
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDashboard);
} else {
    initDashboard();
}
