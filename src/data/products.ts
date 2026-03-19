interface Product {
  id: string;
  name: string;
  subtitle: string;
  fullName: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  features: string[];
  applications: string[];
  specs: { category: string; items: { label: string; value: string }[] }[];
  technologies: string[];
  relatedProducts: string[];
  datasheetUrl: string;
}


export const productsData: Record<string, Product> = {
  'obsessio-x1': {
    id: 'obsessio-x1',
    name: 'OBSESSIO X1',
    fullName: 'OBSESSIO X1 - Potentiometric Displacement Sensor',
    subtitle: 'Potentiometric Displacement',
    category: 'Displacement Range',
    description: 'Connected sensor for monitoring cracks, expansion joints, and structural displacements.',
    longDescription: `OBSESSIO X1 is a connected sensor designed to monitor the evolution of cracks, expansion joints, and other phenomena related to structural displacements. It interfaces with all potentiometric displacement sensors available on the market.

The device also integrates a temperature measurement via a remote thermistor, allowing measurement of concrete surface or core temperature to correlate displacement variations with thermal conditions.

OBSESSIO X1 can be used with different types of communication networks: SIGFOX, LoRaWAN, or LoRa P2P (private network), depending on use cases.`,
    image: '/images/product-obsessio-x1.jpg',
    gallery: ['/images/product-obsessio-x1.jpg', '/images/product-pack-fissure.jpg'],
    features: [
      'Compatible with wide variety of potentiometric displacement sensors: spring sensor, ball joint sensor, cable sensor...',
      'Battery autonomy: 1 to 3 years (depending on acquisition frequency)',
      'Remote temperature sensor integrated',
      'Waterproof IP66 compliant',
      'Data redundancy with integrated internal memory',
      'Local configuration via smartphone (Bluetooth/NFC)',
      'Rugged material suitable for industrial environments',
      'Quick sensor connection terminal block',
    ],
    applications: [
      'Crack monitoring in concrete structures',
      'Expansion joint measurement',
      'Bridge deformation tracking',
      'Building settlement monitoring',
      'Tunnel convergence measurement',
      'Dam structural health monitoring',
    ],
    specs: [
      {
        category: 'General Specifications',
        items: [
          { label: 'Dimensions (L x W x H)', value: '98 x 64 x 35 mm' },
          { label: 'Housing Material', value: 'Polycarbonate, UV resistant, V0 flame retardant, IK10 shock resistant' },
          { label: 'Total Weight', value: '0.2 kg' },
          { label: 'Protection Rating', value: 'IP66' },
          { label: 'Operating Temperature', value: '-20°C to +60°C' },
          { label: 'Mounting Options', value: 'Wall mounting plate available, 4mm oblong holes' },
        ],
      },
      {
        category: 'Power & Communication',
        items: [
          { label: 'Power Supply', value: '3.6V Type A Battery' },
          { label: 'External Power Option', value: '4.8 to 32 VDC' },
          { label: 'Sensor Connection', value: 'Quick terminal block' },
          { label: 'Antenna', value: 'Straight or Omnidirectional - 3 dBi gain' },
          { label: 'Configuration', value: 'Bluetooth/NFC via smartphone' },
        ],
      },
      {
        category: 'Displacement Measurement',
        items: [
          { label: 'Compatible Sensor Type', value: 'Potentiometric' },
          { label: 'Excitation', value: '2.5 VDC' },
          { label: 'Recommended Nominal Resistance', value: '> 1 kOhm' },
          { label: 'Resolution', value: '21 bits FS' },
          { label: 'Measurement Accuracy (module + probe)', value: '≤ 20 µm (with temperature variation)' },
          { label: 'Linearity', value: '± 0.5% FS' },
        ],
      },
      {
        category: 'Temperature Measurement',
        items: [
          { label: 'Compatible Sensor Type', value: 'Remote NTC thermistor' },
          { label: 'Measurement Range', value: '-40°C to 105°C' },
          { label: 'Resolution', value: '± 0.01°C' },
          { label: 'Measurement Accuracy', value: '± 0.5°C (between 0 and 40°C)' },
        ],
      },
    ],
    technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
    relatedProducts: ['obsessio-x2', 'pack-fissure', 'distancio'],
    datasheetUrl: '#',
  },
  'obsessio-x2': {
    id: 'obsessio-x2',
    name: 'OBSESSIO X2',
    fullName: 'OBSESSIO X2 - LVDT Displacement Sensor',
    subtitle: 'LVDT Displacement',
    category: 'Displacement Range',
    description: 'High-precision LVDT sensor for crack monitoring with exceptional accuracy.',
    longDescription: `OBSESSIO X2 is a connected sensor designed to monitor crack evolution and structural displacements. It interfaces with LVDT (Linear Variable Differential Transformer) sensors recognized for their high precision, low temperature disturbance, and long-term reliability.

The device integrates a temperature measurement via a remote thermistor, allowing measurement of concrete surface or core temperature to correlate displacement variations with thermal conditions.

OBSESSIO X2 can be used with different types of communication networks: SIGFOX, LoRaWAN, or LoRa P2P (private network), depending on use cases.`,
    image: '/images/product-obsessio-x2.jpg',
    gallery: ['/images/product-obsessio-x2.jpg'],
    features: [
      'High precision LVDT sensor interface',
      'Low temperature disturbance',
      'Great long-term reliability',
      'Battery autonomy: 1 to 3 years',
      'Remote temperature sensor',
      'Waterproof IP66 compliant',
      'Data redundancy with internal memory',
      'Local configuration via smartphone',
    ],
    applications: [
      'High-precision crack monitoring',
      'Structural deformation analysis',
      'Laboratory testing',
      'Quality control applications',
      'Research projects',
      'Critical infrastructure monitoring',
    ],
    specs: [
      {
        category: 'General Specifications',
        items: [
          { label: 'Dimensions (L x W x H)', value: '98 x 64 x 35 mm' },
          { label: 'Housing Material', value: 'Polycarbonate, UV resistant, V0 flame retardant' },
          { label: 'Total Weight', value: '0.2 kg' },
          { label: 'Protection Rating', value: 'IP66' },
          { label: 'Operating Temperature', value: '-20°C to +60°C' },
        ],
      },
      {
        category: 'Displacement Measurement',
        items: [
          { label: 'Compatible Sensor Type', value: 'LVDT' },
          { label: 'Excitation', value: '3.0 VAC @ 5 kHz' },
          { label: 'Resolution', value: '± 0.01 µm' },
          { label: 'Measurement Accuracy', value: '≤ 5 µm' },
          { label: 'Linearity', value: '0.5% FS' },
        ],
      },
      {
        category: 'Temperature Measurement',
        items: [
          { label: 'Compatible Sensor Type', value: 'Remote NTC thermistor' },
          { label: 'Measurement Range', value: '-40°C to 105°C' },
          { label: 'Resolution', value: '± 0.01°C' },
          { label: 'Measurement Accuracy', value: '± 0.5°C (between 0 and 40°C)' },
        ],
      },
    ],
    technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
    relatedProducts: ['obsessio-x1', 'distancio', 'pack-fissure'],
    datasheetUrl: '#',
  },
  'pack-fissure': {
    id: 'pack-fissure',
    name: 'PACK FISSURE AUTONOME',
    fullName: 'PACK FISSURE AUTONOME - Complete Crack Monitoring Kit',
    subtitle: 'Complete Crack Monitoring Kit',
    category: 'Complete Solutions',
    description: 'Turnkey entry-level solution for reliable and continuous crack monitoring.',
    longDescription: `The Autonomous Crack Pack is the ideal entry-level solution to ensure reliable and continuous crack monitoring on your structures.

The pack includes all necessary components for immediate deployment: OBSESSIO X1 module, radio card, MIRAN potentiometric displacement sensor with 25mm or 50mm stroke, remote temperature probe, and 1-year SIGFOX or LoRaWAN subscription.

Note: OBSESSIO X1 mounting accessories and sensor mounting kit are not included in the pack price.`,
    image: '/images/product-pack-fissure.jpg',
    gallery: ['/images/product-pack-fissure.jpg', '/images/product-obsessio-x1.jpg'],
    features: [
      'Turnkey solution for crack monitoring',
      'Includes all necessary components',
      '1-year SIGFOX or LoRaWAN subscription included',
      'Complete metrological verification certificate',
      'Battery autonomy: 1 to 3 years',
      'Easy installation and configuration',
      'Ready to deploy',
      'Technical support included',
    ],
    applications: [
      'Building crack monitoring',
      'Infrastructure health tracking',
      'Insurance claim documentation',
      'Property management',
      'Safety compliance',
      'Preventive maintenance',
    ],
    specs: [
      {
        category: 'Package Contents',
        items: [
          { label: 'OBSESSIO X1 Module', value: '1 unit' },
          { label: 'Radio Card', value: '1 unit' },
          { label: 'Potentiometric Sensor', value: 'MIRAN KTR2, 25mm or 50mm' },
          { label: 'Temperature Probe', value: '1 remote probe' },
          { label: 'Subscription', value: '1 year SIGFOX or LoRaWAN' },
          { label: 'Certificate', value: 'Complete metrological verification' },
        ],
      },
      {
        category: 'Sensor Specifications',
        items: [
          { label: 'Sensor Type', value: 'MIRAN model KTR2' },
          { label: 'Excitation', value: '2.5 VDC' },
          { label: 'Nominal Resistance', value: '2 kΩ (0-25mm), 5 kΩ (0-50mm)' },
          { label: 'Resolution', value: 'Infinite' },
          { label: 'Measurement Accuracy', value: '≤ 50 µm' },
          { label: 'Linearity', value: '± 0.1% FS' },
        ],
      },
    ],
    technologies: ['SIGFOX', 'LoRaWAN'],
    relatedProducts: ['obsessio-x1', 'obsessio-x2', 'distancio'],
    datasheetUrl: '#',
  },
  'distancio': {
    id: 'distancio',
    name: 'DISTANCIO',
    fullName: 'DISTANCIO - Laser Distance & Inclinometer',
    subtitle: 'Laser Distance & MEMS Inclinometer',
    category: 'Displacement Range',
    description: '2-in-1 sensor for precise non-contact measurements up to 150 meters.',
    longDescription: `DISTANCIO is a 2-in-1 sensor that enables precise non-contact measurements over a range of up to 150 meters. It features a high-performance laser developed by a world-leading manufacturer, guaranteeing ±1mm accuracy across the entire measurement range.

It integrates a dual-axis MEMS inclinometer, offering complementary tilt measurement for even more reliable and complete applications.

DISTANCIO can be used with different types of communication networks: SIGFOX, LoRaWAN, or LoRa P2P (private network), depending on use cases.`,
    image: '/images/product-distancio.jpg',
    gallery: ['/images/product-distancio.jpg'],
    features: [
      '2-in-1 sensor (Laser distance + MEMS inclinometer)',
      'Non-contact measurement up to 150 meters',
      'High precision laser with ±1mm accuracy',
      'Battery autonomy: 1 to 3 years',
      'Waterproof IP66 compliant',
      'Data redundancy with internal memory',
      'Local configuration via smartphone',
      'Aluminum housing for harsh environments',
    ],
    applications: [
      'Bridge clearance monitoring',
      'Slope stability measurement',
      'Mining operation monitoring',
      'Tunnel convergence',
      'Structural deformation tracking',
      'Geotechnical applications',
    ],
    specs: [
      {
        category: 'General Specifications',
        items: [
          { label: 'Dimensions (L x W x H)', value: '170 x 111 x 61 mm' },
          { label: 'Housing Material', value: 'Aluminum, UV resistant, V0 flame retardant' },
          { label: 'Total Weight', value: '0.65 kg' },
          { label: 'Protection Rating', value: 'IP66' },
          { label: 'Operating Temperature', value: '-10°C to +50°C' },
        ],
      },
      {
        category: 'Laser Measurement',
        items: [
          { label: 'Laser Type', value: 'Diode laser 620-690nm (red, typical 655nm)' },
          { label: 'Laser Class', value: 'Class 2 (IEC 60825-1:2014)' },
          { label: 'Max Radiant Power', value: '1 mW' },
          { label: 'Range (natural surfaces)', value: '0.05 to 15 m' },
          { label: 'Range (reflective targets)', value: '40 to 150 m' },
          { label: 'Measurement Accuracy', value: '± 1.0 mm (distance independent)' },
          { label: 'Resolution', value: '0.1 mm' },
          { label: 'Repeatability', value: '± 0.3 mm' },
        ],
      },
      {
        category: 'Inclinometer',
        items: [
          { label: 'Sensor Type', value: '2-axis MEMS accelerometer' },
          { label: 'Measurement Range', value: '± 90°' },
          { label: 'Resolution', value: '± 0.1°' },
        ],
      },
    ],
    technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
    relatedProducts: ['horizio', 'obsessio-x1', 'obsessio-x2'],
    datasheetUrl: '#',
  },
  'horizio': {
    id: 'horizio',
    name: 'HORIZIO XY',
    fullName: 'HORIZIO XY - Capacitive Inclinometer 2-Axis',
    subtitle: 'Capacitive Inclinometer 2-Axis',
    category: 'Inclinometry Range',
    description: 'High-precision capacitive inclinometer for structural tilt measurement.',
    longDescription: `HORIZIO measures inclination phenomena of structures (facades, bridge piers...), slope sliding, railway uplift and settlement. It features high-precision capacitive sensors offering numerous advantages.

With 0.001° resolution and measurement range up to ±10°, it provides a robust and reliable solution for measuring inclination phenomena, even in the most demanding environments, thanks to its low sensitivity to temperature variations.

HORIZIO can be used with different types of communication networks: SIGFOX, LoRaWAN, or LoRa P2P (private network), depending on use cases.`,
    image: '/images/product-horizio.jpg',
    gallery: ['/images/product-horizio.jpg'],
    features: [
      'High precision measurement with 0.001° resolution',
      'Very low temperature variation',
      'No hysteresis on output signal',
      'Angle independent of local gravitational acceleration',
      'Insensitive to magnetic field interference',
      'Waterproof IP66 compliant',
      'Battery autonomy: 1 to 3 years',
      'Adjustable mechanical offset (±40°)',
    ],
    applications: [
      'Building facade monitoring',
      'Bridge pier inclination tracking',
      'Slope stability measurement',
      'Railway track monitoring',
      'Tower alignment verification',
      'Wind turbine foundation monitoring',
    ],
    specs: [
      {
        category: 'General Specifications',
        items: [
          { label: 'Dimensions (L x W x H)', value: '98 x 60 x 45 mm' },
          { label: 'Housing Material', value: 'Aluminum, UV resistant, V0 flame retardant' },
          { label: 'Total Weight', value: '0.4 kg' },
          { label: 'Protection Rating', value: 'IP66' },
          { label: 'Operating Temperature', value: '-40°C to +85°C' },
        ],
      },
      {
        category: 'Inclination Measurement',
        items: [
          { label: 'Sensor Type', value: 'Capacitive' },
          { label: 'Range', value: '± 10°' },
          { label: 'Resolution', value: '0.001°' },
          { label: 'Linearity', value: '< 0.1% FS' },
          { label: 'Transverse Sensitivity', value: '0.5% at 45° inclination' },
          { label: 'Temperature Drift', value: '< ±0.001°/K' },
          { label: 'Adjustable Offset', value: '-40° to +40° (X and Y)' },
        ],
      },
    ],
    technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
    relatedProducts: ['distancio', 'extenso', 'thx'],
    datasheetUrl: '#',
  },
  'extenso': {
    id: 'extenso',
    name: 'EXTENSO X1 / X3',
    fullName: 'EXTENSO - Strain Gauge Module',
    subtitle: 'Strain Gauge Module',
    category: 'Extensometry Range',
    description: 'Wireless module for measuring mechanical deformations using strain gauges.',
    longDescription: `EXTENSO measures mechanical deformations of a material or structure using strain gauges. A strain gauge is a device that converts mechanical deformation into electrical resistance variation. Attached to a material surface, it detects elongation or compression.

It can interface with cold-bonded gauges, hot-welded spot gauges, and different wiring types (quarter bridge, half bridge, full bridge), making it extremely versatile: tension monitoring of tie rods, deformations of metal structures, measuring signals from load cells or pressure sensors.

EXTENSO can be used with different types of communication networks: SIGFOX, LoRaWAN, or LoRa P2P (private network), depending on use cases.`,
    image: '/images/product-extenso.jpg',
    gallery: ['/images/product-extenso.jpg'],
    features: [
      'High precision for material deformations',
      'High sensitivity for micro-deformation measurement',
      'Compatible with wide range of gauge types',
      'Adjustable gauge factor',
      'Battery autonomy: 1 to 3 years',
      'Waterproof IP66 compliant',
      'Data redundancy with internal memory',
      'Local configuration via smartphone',
    ],
    applications: [
      'Tie rod tension monitoring',
      'Metal structure deformation analysis',
      'Load cell signal measurement',
      'Pressure sensor integration',
      'Material testing',
      'Structural health monitoring',
    ],
    specs: [
      {
        category: 'General Specifications',
        items: [
          { label: 'Dimensions (L x W x H)', value: '98 x 64 x 35 mm' },
          { label: 'Housing Material', value: 'Polycarbonate, UV resistant' },
          { label: 'Total Weight', value: '0.2 kg' },
          { label: 'Protection Rating', value: 'IP66' },
          { label: 'Operating Temperature', value: '-40°C to +85°C' },
        ],
      },
      {
        category: 'Strain Measurement',
        items: [
          { label: 'Compatible Types', value: '1/4 bridge, 1/2 bridge, full bridge' },
          { label: 'Measurement Range', value: 'Customer specific' },
          { label: 'Resolution', value: '0.001°' },
          { label: 'Gauge Factor', value: 'Adjustable' },
        ],
      },
    ],
    technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
    relatedProducts: ['obsessio-x1', 'obsessio-x2', 'horizio'],
    datasheetUrl: '#',
  },
  'thx': {
    id: 'thx',
    name: 'Module THx',
    fullName: 'Module THx - Temperature & Humidity',
    subtitle: 'Temperature & Humidity Monitoring',
    category: 'Environment Range',
    description: 'Connected sensor for continuous monitoring of temperature and humidity conditions.',
    longDescription: `The THx module is a connected sensor designed to continuously monitor temperature and humidity conditions. It interfaces with two probe ranges:

Standard range with TH50 probe, and premium range with VAISALA® HMP110 probe, offering excellent metrological performance (VAISALA® being a reference manufacturer in humidity measurement and monitoring).

The THx module can be used with different types of communication networks: SIGFOX, LoRaWAN, or LoRa P2P (private network), depending on use cases.`,
    image: '/images/product-thx.jpg',
    gallery: ['/images/product-thx.jpg'],
    features: [
      'Two ranges available according to needs',
      'Premium VAISALA® HMP110 option',
      'Battery autonomy: 1 to 3 years',
      'Waterproof IP66 compliant',
      'Data redundancy with internal memory',
      'Local configuration via smartphone',
      'Quick probe connection',
      'Excellent metrological performance',
    ],
    applications: [
      'Environmental monitoring',
      'Concrete curing tracking',
      'Warehouse climate control',
      'Museum artifact preservation',
      'HVAC system optimization',
      'Weather station integration',
    ],
    specs: [
      {
        category: 'General Specifications',
        items: [
          { label: 'Dimensions (L x W x H)', value: '98 x 64 x 35 mm' },
          { label: 'Housing Material', value: 'Polycarbonate, UV resistant' },
          { label: 'Total Weight', value: '0.2 kg' },
          { label: 'Protection Rating', value: 'IP66' },
          { label: 'Operating Temperature', value: '-20°C to +60°C' },
        ],
      },
      {
        category: 'TH50 Probe (Standard)',
        items: [
          { label: 'Humidity Accuracy', value: '± 3% RH (0-80% RH)' },
          { label: 'Temperature Accuracy', value: '± 0.1°C (20 to +60°C)' },
        ],
      },
      {
        category: 'HMP110 Probe (Premium)',
        items: [
          { label: 'Humidity Accuracy', value: '± 1.5% RH (0-90% RH)' },
          { label: 'Humidity Accuracy (high)', value: '± 2.5% RH (90-100% RH)' },
          { label: 'Temperature Accuracy', value: '± 0.2°C (0 to +40°C)' },
          { label: 'Temperature Accuracy (ext)', value: '± 0.4°C (-40 to 0°C / +40 to +80°C)' },
        ],
      },
    ],
    technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
    relatedProducts: ['horizio', 'distancio', 'extenso'],
    datasheetUrl: '#',
  },
};

export const productList = Object.values(productsData);
