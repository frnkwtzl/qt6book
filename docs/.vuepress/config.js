module.exports = {
  title: 'The Qt 6 Book',
  description: "A book about QML",  
  plugins: [
    'vuepress-plugin-mermaidjs',
    [ '@e8johan/vuepress-plugin-pdf-export', {
        puppeteerLaunchOptions: { args: [ '--no-sandbox', '--disable-setuid-sandbox' ] },
        outputFileName: 'qt6book.pdf',
        sorter: (a, b) => { return pageSorter(a.relativePath, b.relativePath); },
        filter: (p) => { return pageFilter(p.relativePath); },
        tocLevel: (p) => { return tocLevel(p.relativePath); },
        frontPage: 'assets/frontpage.pdf',
    }],
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
        lang: 'en-US', // this will be set as the lang attribute on <html>
        title: 'The Qt 6 Book',
        description: "A book about QML",
    },
    '/fa/': {
        lang: 'fa-IR',
        title: 'کتاب کیوت ۶',
        description: 'کتابی درباره‌ی کیو ام ال'
    }
},  
  themeConfig: {
    displayAllHeaders: false,
    repo: 'qmlbook/qt6book',
    repoLabel: 'Contribute!',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    nav: [
    ],
    sidebar: sidebarOrder(),
    locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      '/': {
          selectText: 'Languages',
          label: 'English',
          editLinkText: 'Help us improve this page!',
          lastUpdated: 'Last Updated',
          sidebar: sidebarOrder(),
      },
      '/fa/': {
          selectText: 'Languages',
          label: 'فارسی',
          lastUpdated: 'آخرین ویرایش',
          editLinkText: 'به ما در بهبود این صفحه کمک کنید.',
          sidebar: faSidebarOrder(),
      }
  },
  },
}

function _pageOrder() {
    pageOrder = []

    const chapterOrder = sidebarOrder();
    chapterOrder.forEach(chapter => {
        pages = chapter.children
        pages.forEach(page => pageOrder.push(page));
    });

    return pageOrder;
}

function tocLevel(p) {
    const tocTopLevel = sidebarOrder().map(s => { return s.path; });
    if (p.endsWith('.md'))
        p = '/' + p.slice(0, -3)
    if (tocTopLevel.indexOf(p) != -1)
        return 0;
    else
        return 1;
}

function pageFilter(p) {
    const pageOrder = _pageOrder()

    if (p.endsWith('.md'))
        p = '/' + p.slice(0, -3);

    const indexP = pageOrder.indexOf(p);

    return (indexP != -1);
}

function pageSorter(a, b) {
    const pageOrder = _pageOrder();

    if (a.endsWith('.md'))
        a = '/' + a.slice(0, -3);
    if (b.endsWith('.md'))
        b = '/' + b.slice(0, -3);

    const indexA = pageOrder.indexOf(a);
    const indexB = pageOrder.indexOf(b);

    if (indexA == -1)
        console.log("Page not found in index " + a);
    if (indexB == -1)
        console.log("Page not found in index " + b);

    if (indexA < indexB)
        return -1;
    if (indexA > indexB)
        return 1;

    return 0;
}

function sidebarOrder() {
    return [
      prefaceSidebar(),
      ch01Sidebar(),
      ch02Sidebar(),
      ch03Sidebar(),
      ch04Sidebar(),
      ch05Sidebar(),
      ch06Sidebar(),
      ch07Sidebar(),
      ch08Sidebar(),
      ch09Sidebar(),
      ch10Sidebar(),
      ch11Sidebar(),
      ch12Sidebar(),
      ch13Sidebar(),
      ch14Sidebar(),
      ch15Sidebar(),
      ch16Sidebar(),
      ch17Sidebar(),
      ch18Sidebar(),
      ch19Sidebar(),
      ch20Sidebar(),
    ];
}

function ch20Sidebar() {
  return {
    title: "Qt for MCUs",
    path: '/ch20-qtformcu/qtformcu',
    collapsable: false,
    children: [
      '/ch20-qtformcu/qtformcu',
      '/ch20-qtformcu/setup',
      '/ch20-qtformcu/helloworld',
      '/ch20-qtformcu/cpp',
      '/ch20-qtformcu/models',
      '/ch20-qtformcu/summary',
    ]
  }
}

function ch19Sidebar() {
  return {
    title: "Qt for Python",
    path: '/ch19-python/qt-python',
    collapsable: false,
    children: [
      '/ch19-python/qt-python',
      '/ch19-python/introduction',
      '/ch19-python/installing',
      '/ch19-python/build-app',
      '/ch19-python/limitations',
      '/ch19-python/summary',
    ]
  }
}

function ch18Sidebar() {
  return {
    title: "Extending QML",
    path: '/ch18-extensions/extending-qml',
    collapsable: false,
    children: [
      '/ch18-extensions/extending-qml',
      '/ch18-extensions/qml-runtime',
      '/ch18-extensions/plugin-content',
      '/ch18-extensions/create-plugin',
      '/ch18-extensions/fileio-demo',
      '/ch18-extensions/using-fileio',
      '/ch18-extensions/summary',
    ]
  }
}

function ch17Sidebar() {
  return {
    title: "Qt C++",
    path: '/ch17-qtcpp/qtcpp',
    collapsable: false,
    children: [
      '/ch17-qtcpp/qtcpp',
      '/ch17-qtcpp/boilerplate',
      '/ch17-qtcpp/qobject',
      '/ch17-qtcpp/build-system',
      '/ch17-qtcpp/common-classes',
      '/ch17-qtcpp/cpp-models',
    ]
  }
}

function ch16Sidebar() {
  return {
    title: "Javascript",
    path: '/ch16-javascript/javascript',
    collapsable: false,
    children: [
      '/ch16-javascript/javascript',
      '/ch16-javascript/html-qml',
      '/ch16-javascript/js-language',
      '/ch16-javascript/js-objects',
      '/ch16-javascript/js-console',
    ]
  }
}

function ch15Sidebar() {
  return {
    title: "Dynamic QML",
    path: '/ch15-dynamicqml/dynamic-qml',
    collapsable: false,
    children: [
      '/ch15-dynamicqml/dynamic-qml',
      '/ch15-dynamicqml/loading-components',
      '/ch15-dynamicqml/dynamic-objects',
      '/ch15-dynamicqml/tracking-objects',
      '/ch15-dynamicqml/summary',
    ]
  }
}

function ch14Sidebar() {
  return {
    title: "Storage",
    path: '/ch14-storage/storage',
    collapsable: false,
    children: [
      '/ch14-storage/storage',
      '/ch14-storage/settings',
      '/ch14-storage/local-storage',
    ]
  }
}

function ch13Sidebar() {
  return {
    title: "Networking",
    path: '/ch13-networking/networking',
    collapsable: false,
    children: [
      '/ch13-networking/networking',
      '/ch13-networking/serve-qml',
      '/ch13-networking/templates',
      '/ch13-networking/http-requests',
      '/ch13-networking/local-files',
      '/ch13-networking/rest-api',
      '/ch13-networking/authentication',
      '/ch13-networking/web-sockets',
      '/ch13-networking/summary',
    ]
  }
}

function ch12Sidebar() {
  return {
    title: "Qt Quick 3D",
    path: '/ch12-qtquick3d/intro',
    collapsable: false,
    children: [
      '/ch12-qtquick3d/intro',
      '/ch12-qtquick3d/basics',
      '/ch12-qtquick3d/assets',
      '/ch12-qtquick3d/materials-and-light',
      '/ch12-qtquick3d/animations',
      '/ch12-qtquick3d/mixing-2d-and-3d',
      '/ch12-qtquick3d/summary',
    ]
  }
}

function ch11Sidebar() {
  return {
    title: "Multimedia",
    path: '/ch11-multimedia/multimedia',
    collapsable: false,
    children: [
      '/ch11-multimedia/multimedia',
      '/ch11-multimedia/playing-media',
      '/ch11-multimedia/sound-effects',
      '/ch11-multimedia/video-streams',
      '/ch11-multimedia/capturing-images',
      '/ch11-multimedia/summary',
    ]
  }
}

function ch10Sidebar() {
  return {
    title: "Effects",
    path: '/ch10-effects/effects',
    collapsable: false,
    children: [
      '/ch10-effects/effects',
      '/ch10-effects/particles',
      '/ch10-effects/simple-simulation',
      '/ch10-effects/particle-parameters',
      '/ch10-effects/directed-particles',
      '/ch10-effects/affecting-particles',
      '/ch10-effects/particle-groups',
      '/ch10-effects/particle-painters',
      '/ch10-effects/opengl-shaders',
      '/ch10-effects/shader-elements',
      '/ch10-effects/fragment-shaders',
      '/ch10-effects/wave-effect',
      '/ch10-effects/vertex-shader',
      '/ch10-effects/curtain-effect',
      '/ch10-effects/summary',
    ]
  }
}

function ch09Sidebar() {
  return {
    title: "Shapes",
    path: '/ch09-shapes/shapes',
    collapsable: false,
    children: [
      '/ch09-shapes/shapes',
      '/ch09-shapes/basics',
      '/ch09-shapes/paths',
      '/ch09-shapes/gradients',
      '/ch09-shapes/animations',
      '/ch09-shapes/summary',
    ]
  }
}

function ch08Sidebar() {
  return {
    title: "Canvas",
    path: '/ch08-canvas/canvas-element',
    collapsable: false,
    children: [
      '/ch08-canvas/canvas-element',
      '/ch08-canvas/convenience-api',
      '/ch08-canvas/gradients',
      '/ch08-canvas/shadows',
      '/ch08-canvas/images',
      '/ch08-canvas/transformation',
      '/ch08-canvas/composition-modes',
      '/ch08-canvas/pixel-buffer',
      '/ch08-canvas/canvas-paint',
      '/ch08-canvas/port-from-html',
    ]
  }
}

function ch07Sidebar() {
  return {
    title: "Model View",
    path: '/ch07-modelview/model-view',
    collapsable: false,
    children: [
      '/ch07-modelview/model-view',
      '/ch07-modelview/concept',
      '/ch07-modelview/basic-models',
      '/ch07-modelview/dynamic-views',
      '/ch07-modelview/delegate',
      '/ch07-modelview/advanced',
      '/ch07-modelview/summary',
    ]
  }
}

function ch06Sidebar() {
  return {
    title: "QtQuick Controls",
    path: '/ch06-controls/controls2',
    collapsable: false,
    children: [
      '/ch06-controls/controls2',
      '/ch06-controls/introduction',
      '/ch06-controls/image-viewer',
      '/ch06-controls/common-patterns',
      '/ch06-controls/imagine-style',
      '/ch06-controls/summary',
    ]
  }
}

function ch05Sidebar() {
  return {
    title: "Fluid Elements",
    path: '/ch05-fluid/fluid-elements',
    collapsable: false,
    children: [
      '/ch05-fluid/fluid-elements',
      '/ch05-fluid/animations',
      '/ch05-fluid/states-transitions',
      '/ch05-fluid/advanced',
    ]
  }
}

function ch04Sidebar() {
  return {
    title: "Quick Starter",
    path: '/ch04-qmlstart/quick-start',
    collapsable: false,
    children: [
      '/ch04-qmlstart/quick-start',
      '/ch04-qmlstart/qml-syntax',
      '/ch04-qmlstart/core-elements',
      '/ch04-qmlstart/components',
      '/ch04-qmlstart/transformations',
      '/ch04-qmlstart/positioning',
      '/ch04-qmlstart/layout',
      '/ch04-qmlstart/input',
      '/ch04-qmlstart/advanced',
    ]
  }
}

function ch03Sidebar() {
  return {
    title: "Qt Creator IDE",
    path: '/ch03-qtcreator/qt-creator',
    collapsable: false,
    children: [
      '/ch03-qtcreator/qt-creator',
      '/ch03-qtcreator/user-interface',
      '/ch03-qtcreator/kit-registry',
      '/ch03-qtcreator/projects',
      '/ch03-qtcreator/editor',
      '/ch03-qtcreator/locator',
      '/ch03-qtcreator/debugging',
      '/ch03-qtcreator/shortcuts',
    ]
  }
}

function ch02Sidebar() {
  return {
    title: "Getting Started",
    path: '/ch02-start/quick-start',
    collapsable: false,
    children: [
      '/ch02-start/quick-start',
      '/ch02-start/install',
      '/ch02-start/hello-world',
      '/ch02-start/app-types',
      '/ch02-start/summary',
    ]
  }
}

function ch01Sidebar() {
  return { 
    title: "Meet Qt",
    path: '/ch01-meetqt/meet-qt',
    collapsable: false,
    children: [
      '/ch01-meetqt/meet-qt',
      '/ch01-meetqt/blocks',
      '/ch01-meetqt/intro',
    ]
  }
}

function prefaceSidebar() {
  return { 
    title: "Preface",
    path: '/preface/preface',
    collapsable: false,
    children: [
      '/preface/preface',
      '/preface/acknowledgements',
      '/preface/authors',
    ]
  }
}

// Sidebar for persian 


function faSidebarOrder() {
  return [
    faPrefaceSidebar(),
    faCh01Sidebar(),
    faCh02Sidebar(),
    faCh03Sidebar(),
    faCh04Sidebar(),
    faCh05Sidebar(),
    faCh06Sidebar(),
    faCh07Sidebar(),
    faCh08Sidebar(),
    faCh09Sidebar(),
    faCh10Sidebar(),
    faCh11Sidebar(),
    faCh12Sidebar(),
    faCh13Sidebar(),
    faCh14Sidebar(),
    faCh15Sidebar(),
    faCh16Sidebar(),
    faCh17Sidebar(),
    faCh18Sidebar(),
    faCh19Sidebar(),
    faCh20Sidebar(),
  ];
}

function faCh20Sidebar() {
return {
  title: "Qt برای MCUها",
  path: '/fa/ch20-qtformcu/qtformcu',
  collapsable: false,
  children: [
    '/fa/ch20-qtformcu/qtformcu',
    '/fa/ch20-qtformcu/setup',
    '/fa/ch20-qtformcu/helloworld',
    '/fa/ch20-qtformcu/cpp',
    '/fa/ch20-qtformcu/models',
    '/fa/ch20-qtformcu/summary',
  ]
}
}

function faCh19Sidebar() {
return {
  title: "Qt برای پایتون",
  path: '/fa/ch19-python/qt-python',
  collapsable: false,
  children: [
    '/fa/ch19-python/qt-python',
    '/fa/ch19-python/introduction',
    '/fa/ch19-python/installing',
    '/fa/ch19-python/build-app',
    '/fa/ch19-python/limitations',
    '/fa/ch19-python/summary',
  ]
}
}

function faCh18Sidebar() {
return {
  title: "گسترش QML",
  path: '/fa/ch18-extensions/extending-qml',
  collapsable: false,
  children: [
    '/fa/ch18-extensions/extending-qml',
    '/fa/ch18-extensions/qml-runtime',
    '/fa/ch18-extensions/plugin-content',
    '/fa/ch18-extensions/create-plugin',
    '/fa/ch18-extensions/fileio-demo',
    '/fa/ch18-extensions/using-fileio',
    '/fa/ch18-extensions/summary',
  ]
}
}

function faCh17Sidebar() {
return {
  title: "Qt C++",
  path: '/fa/ch17-qtcpp/qtcpp',
  collapsable: false,
  children: [
    '/fa/ch17-qtcpp/qtcpp',
    '/fa/ch17-qtcpp/boilerplate',
    '/fa/ch17-qtcpp/qobject',
    '/fa/ch17-qtcpp/build-system',
    '/fa/ch17-qtcpp/common-classes',
    '/fa/ch17-qtcpp/cpp-models',
  ]
}
}

function faCh16Sidebar() {
return {
  title: "Javascript",
  path: '/fa/ch16-javascript/javascript',
  collapsable: false,
  children: [
    '/fa/ch16-javascript/javascript',
    '/fa/ch16-javascript/html-qml',
    '/fa/ch16-javascript/js-language',
    '/fa/ch16-javascript/js-objects',
    '/fa/ch16-javascript/js-console',
  ]
}
}

function faCh15Sidebar() {
return {
  title: "QML پویا",
  path: '/fa/ch15-dynamicqml/dynamic-qml',
  collapsable: false,
  children: [
    '/fa/ch15-dynamicqml/dynamic-qml',
    '/fa/ch15-dynamicqml/loading-components',
    '/fa/ch15-dynamicqml/dynamic-objects',
    '/fa/ch15-dynamicqml/tracking-objects',
    '/fa/ch15-dynamicqml/summary',
  ]
}
}

function faCh14Sidebar() {
return {
  title: "ذخیره سازی",
  path: '/fa/ch14-storage/storage',
  collapsable: false,
  children: [
    '/fa/ch14-storage/storage',
    '/fa/ch14-storage/settings',
    '/fa/ch14-storage/local-storage',
  ]
}
}

function faCh13Sidebar() {
return {
  title: "شبکه",
  path: '/fa/ch13-networking/networking',
  collapsable: false,
  children: [
    '/fa/ch13-networking/networking',
    '/fa/ch13-networking/serve-qml',
    '/fa/ch13-networking/templates',
    '/fa/ch13-networking/http-requests',
    '/fa/ch13-networking/local-files',
    '/fa/ch13-networking/rest-api',
    '/fa/ch13-networking/authentication',
    '/fa/ch13-networking/web-sockets',
    '/fa/ch13-networking/summary',
  ]
}
}

function faCh12Sidebar() {
return {
  title: "Qt Quick 3D",
  path: '/fa/ch12-qtquick3d/intro',
  collapsable: false,
  children: [
    '/fa/ch12-qtquick3d/intro',
    '/fa/ch12-qtquick3d/basics',
    '/fa/ch12-qtquick3d/assets',
    '/fa/ch12-qtquick3d/materials-and-light',
    '/fa/ch12-qtquick3d/animations',
    '/fa/ch12-qtquick3d/mixing-2d-and-3d',
    '/fa/ch12-qtquick3d/summary',
  ]
}
}

function faCh11Sidebar() {
return {
  title: "چند رسانه ای",
  path: '/fa/ch11-multimedia/multimedia',
  collapsable: false,
  children: [
    '/fa/ch11-multimedia/multimedia',
    '/fa/ch11-multimedia/playing-media',
    '/fa/ch11-multimedia/sound-effects',
    '/fa/ch11-multimedia/video-streams',
    '/fa/ch11-multimedia/capturing-images',
    '/fa/ch11-multimedia/summary',
  ]
}
}

function faCh10Sidebar() {
return {
  title: "جلوه ها",
  path: '/fa/ch10-effects/effects',
  collapsable: false,
  children: [
    '/fa/ch10-effects/effects',
    '/fa/ch10-effects/particles',
    '/fa/ch10-effects/simple-simulation',
    '/fa/ch10-effects/particle-parameters',
    '/fa/ch10-effects/directed-particles',
    '/fa/ch10-effects/affecting-particles',
    '/fa/ch10-effects/particle-groups',
    '/fa/ch10-effects/particle-painters',
    '/fa/ch10-effects/opengl-shaders',
    '/fa/ch10-effects/shader-elements',
    '/fa/ch10-effects/fragment-shaders',
    '/fa/ch10-effects/wave-effect',
    '/fa/ch10-effects/vertex-shader',
    '/fa/ch10-effects/curtain-effect',
    '/fa/ch10-effects/summary',
  ]
}
}

function faCh09Sidebar() {
return {
  title: "شکل ها",
  path: '/fa/ch09-shapes/shapes',
  collapsable: false,
  children: [
    '/fa/ch09-shapes/shapes',
    '/fa/ch09-shapes/basics',
    '/fa/ch09-shapes/paths',
    '/fa/ch09-shapes/gradients',
    '/fa/ch09-shapes/animations',
    '/fa/ch09-shapes/summary',
  ]
}
}

function faCh08Sidebar() {
return {
  title: "بوم",
  path: '/fa/ch08-canvas/canvas-element',
  collapsable: false,
  children: [
    '/fa/ch08-canvas/canvas-element',
    '/fa/ch08-canvas/convenience-api',
    '/fa/ch08-canvas/gradients',
    '/fa/ch08-canvas/shadows',
    '/fa/ch08-canvas/images',
    '/fa/ch08-canvas/transformation',
    '/fa/ch08-canvas/composition-modes',
    '/fa/ch08-canvas/pixel-buffer',
    '/fa/ch08-canvas/canvas-paint',
    '/fa/ch08-canvas/port-from-html',
  ]
}
}

function faCh07Sidebar() {
return {
  title: "Model View",
  path: '/fa/ch07-modelview/model-view',
  collapsable: false,
  children: [
    '/fa/ch07-modelview/model-view',
    '/fa/ch07-modelview/concept',
    '/fa/ch07-modelview/basic-models',
    '/fa/ch07-modelview/dynamic-views',
    '/fa/ch07-modelview/delegate',
    '/fa/ch07-modelview/advanced',
    '/fa/ch07-modelview/summary',
  ]
}
}

function faCh06Sidebar() {
return {
  title: "QtQuick Controls",
  path: '/fa/ch06-controls/controls2',
  collapsable: false,
  children: [
    '/fa/ch06-controls/controls2',
    '/fa/ch06-controls/introduction',
    '/fa/ch06-controls/image-viewer',
    '/fa/ch06-controls/common-patterns',
    '/fa/ch06-controls/imagine-style',
    '/fa/ch06-controls/summary',
  ]
}
}

function faCh05Sidebar() {
return {
  title: "عناصر سیال",
  path: '/fa/ch05-fluid/fluid-elements',
  collapsable: false,
  children: [
    '/fa/ch05-fluid/fluid-elements',
    '/fa/ch05-fluid/animations',
    '/fa/ch05-fluid/states-transitions',
    '/fa/ch05-fluid/advanced',
  ]
}
}

function faCh04Sidebar() {
return {
  title: "شروع سریع",
  path: '/fa/ch04-qmlstart/quick-start',
  collapsable: false,
  children: [
    '/fa/ch04-qmlstart/quick-start',
    '/fa/ch04-qmlstart/qml-syntax',
    '/fa/ch04-qmlstart/core-elements',
    '/fa/ch04-qmlstart/components',
    '/fa/ch04-qmlstart/transformations',
    '/fa/ch04-qmlstart/positioning',
    '/fa/ch04-qmlstart/layout',
    '/fa/ch04-qmlstart/input',
    '/fa/ch04-qmlstart/advanced',
  ]
}
}

function faCh03Sidebar() {
return {
  title: "محیط یکپارچه توسعه Qt Creator",
  path: '/fa/ch03-qtcreator/qt-creator',
  collapsable: false,
  children: [
    '/fa/ch03-qtcreator/qt-creator',
    '/fa/ch03-qtcreator/user-interface',
    '/fa/ch03-qtcreator/kit-registry',
    '/fa/ch03-qtcreator/projects',
    '/fa/ch03-qtcreator/editor',
    '/fa/ch03-qtcreator/locator',
    '/fa/ch03-qtcreator/debugging',
    '/fa/ch03-qtcreator/shortcuts',
  ]
}
}

function faCh02Sidebar() {
return {
  title: "آغاز ماجرا",
  path: '/fa/ch02-start/quick-start',
  collapsable: false,
  children: [
    '/fa/ch02-start/quick-start',
    '/fa/ch02-start/install',
    '/fa/ch02-start/hello-world',
    '/fa/ch02-start/app-types',
    '/fa/ch02-start/summary',
  ]
}
}

function faCh01Sidebar() {
return { 
  title: "ملاقات با Qt",
  path: '/fa/ch01-meetqt/meet-qt',
  collapsable: false,
  children: [
    '/fa/ch01-meetqt/meet-qt',
    '/fa/ch01-meetqt/blocks',
    '/fa/ch01-meetqt/intro',
  ]
}
}

function faPrefaceSidebar() {
return { 
  title: "پیشگفتار",
  path: '/fa/preface/preface',
  collapsable: false,
  children: [
    '/fa/preface/preface',
    '/fa/preface/acknowledgements',
    '/fa/preface/authors',
  ]
}
}