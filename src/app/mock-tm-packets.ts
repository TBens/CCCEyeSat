import { SpacePacket, PacketContainer, Parameter, AbstractContainer } from './model/spacepacket';

export const PACKETS: SpacePacket[] = [
  {
    'name': 'TM_3_25_HK_POWER',
    'description': null,
    'receptionDate': '21/11/16 18:50:20',
    'onBoardDate': '23/11/16 18:50:20',
    'rootContainer': {
      'repetitionNumber': 0,
      'parameterRef': null,
      'name': 'TM_3_25_HK_POWER',
      'subContainers': [
        {
          'repetitionNumber': 0,
          'parameterRef': null,
          'name': 'GENE_HD_TMCCSDSHDR',
          'subContainers': [
            {
              'fixedValue': true,
              'pfc': 3,
              'ptc': 3,
              'length': 3,
              'name': 'GENE_AM_CCSDSVERS',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': 0,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 0,
              'unit': null
            },
            {
              'fixedValue': true,
              'pfc': 1,
              'ptc': 3,
              'length': 1,
              'name': 'GENE_AM_CCSDSTYPE',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': 0,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 3,
              'unit': null
            },
            {
              'fixedValue': true,
              'pfc': 1,
              'ptc': 3,
              'length': 1,
              'name': 'GENE_AM_CCSDSHFLAG',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': 1,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 4,
              'unit': null
            },
            {
              'fixedValue': true,
              'pfc': 11,
              'ptc': 3,
              'length': 11,
              'name': 'GENE_AM_CCSDSAPID',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': 2,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 5,
              'unit': null
            },
            {
              'fixedValue': false,
              'pfc': 2,
              'ptc': 3,
              'length': 2,
              'name': 'GENE_AM_CCSDSGFLAG',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': null,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 16,
              'unit': null
            },
            {
              'fixedValue': false,
              'pfc': 14,
              'ptc': 3,
              'length': 14,
              'name': 'GENE_AM_CCSDSCOUNT',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': null,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 18,
              'unit': null
            },
            {
              'fixedValue': false,
              'pfc': 16,
              'ptc': 3,
              'length': 16,
              'name': 'GENE_AM_CCSDSPLGTH',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': null,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 32,
              'unit': null
            }
          ]
        },
        {
          'repetitionNumber': 0,
          'parameterRef': null,
          'name': 'GENE_HD_TMPUSHDR',
          'subContainers': [
            {
              'fixedValue': true,
              'pfc': 1,
              'ptc': 3,
              'length': 1,
              'name': 'GENE_AM_ZSPARE01',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': 0,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 48,
              'unit': null
            },
            {
              'fixedValue': true,
              'pfc': 3,
              'ptc': 3,
              'length': 3,
              'name': 'GENE_AM_PUSVERSION',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': 1,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 49,
              'unit': null
            },
            {
              'fixedValue': true,
              'pfc': 4,
              'ptc': 3,
              'length': 4,
              'name': 'GENE_AM_ZSPARE04',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': 0,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 52,
              'unit': null
            },
            {
              'fixedValue': true,
              'pfc': 8,
              'ptc': 3,
              'length': 8,
              'name': 'GENE_AM_PUSSERVICE',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': 3,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 56,
              'unit': null
            },
            {
              'fixedValue': true,
              'pfc': 8,
              'ptc': 3,
              'length': 8,
              'name': 'GENE_AM_PUSSUBTYPE',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': 25,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 64,
              'unit': null
            },
            {
              'fixedValue': false,
              'pfc': 18,
              'ptc': 9,
              'length': 56,
              'name': 'TIME',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': null,
                'valueType': 'AbsoluteTime'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 72,
              'unit': null
            }
          ]
        },
        {
          'fixedValue': true,
          'pfc': 8,
          'ptc': 3,
          'length': 8,
          'name': 'SID',
          'description': null,
          'rawData': null,
          'rawValue': {
            'value': 1,
            'valueType': 'Integer'
          },
          'physicalValue': null,
          'calibration': null,
          'monitorings': null,
          'offset': 128,
          'unit': null
        },
        {
          'fixedValue': false,
          'pfc': 16,
          'ptc': 3,
          'length': 16,
          'name': 'BATTERY_BUS_VOLTAGE',
          'description': 'Battery bus voltage',
          'rawData': null,
          'rawValue': {
            'value': null,
            'valueType': 'Integer'
          },
          'physicalValue': null,
          'calibration': {
            'coefficients': [
              {
                'factor': 0.001,
                'exponent': 1.0
              }
            ]
          },
          'monitorings': null,
          'offset': 136,
          'unit': {
            'unit': 'V',
            'power': 1.0,
            'factor': 1.0,
            'description': 'V'
          }
        },
        {
          'fixedValue': false,
          'pfc': 16,
          'ptc': 3,
          'length': 16,
          'name': 'BATTERY_BUS_CURRENT',
          'description': 'Battery bus current',
          'rawData': null,
          'rawValue': {
            'value': null,
            'valueType': 'Integer'
          },
          'physicalValue': null,
          'calibration': {
            'coefficients': [
              {
                'factor': 0.001,
                'exponent': 1.0
              }
            ]
          },
          'monitorings': null,
          'offset': 152,
          'unit': {
            'unit': 'A',
            'power': 1.0,
            'factor': 1.0,
            'description': 'A'
          }
        },
        {
          'repetitionNumber': 0,
          'parameterRef': null,
          'name': 'GENE_TR_TMTRAILER',
          'subContainers': [
            {
              'fixedValue': false,
              'pfc': 2,
              'ptc': 7,
              'length': 16,
              'name': 'GENE_AM_ZCRCPEC',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': null,
                'valueType': 'Binary'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 168,
              'unit': null
            }
          ]
        }
      ]
    }
  },
  {
    'name': 'TM_3_25_HK_POWER2',
    'description': 'Fake packet for dev',
    'receptionDate': '21/11/16 18:55:20',
    'onBoardDate': '24/11/16 18:50:20',
    'rootContainer': {
      'repetitionNumber': 0,
      'parameterRef': null,
      'name': 'TM_3_25_HK_POWER',
      'subContainers': [
        {
          'repetitionNumber': 0,
          'parameterRef': null,
          'name': 'GENE_HD_TMCCSDSHDR',
          'subContainers': [
            {
              'fixedValue': true,
              'pfc': 3,
              'ptc': 3,
              'length': 3,
              'name': 'GENE_AM_CCSDSVERS',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': 0,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 0,
              'unit': null
            },
            {
              'fixedValue': true,
              'pfc': 1,
              'ptc': 3,
              'length': 1,
              'name': 'GENE_AM_CCSDSTYPE',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': 0,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 3,
              'unit': null
            },
            {
              'fixedValue': true,
              'pfc': 1,
              'ptc': 3,
              'length': 1,
              'name': 'GENE_AM_CCSDSHFLAG',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': 1,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 4,
              'unit': null
            },
            {
              'fixedValue': true,
              'pfc': 11,
              'ptc': 3,
              'length': 11,
              'name': 'GENE_AM_CCSDSAPID',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': 2,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 5,
              'unit': null
            },
            {
              'fixedValue': false,
              'pfc': 2,
              'ptc': 3,
              'length': 2,
              'name': 'GENE_AM_CCSDSGFLAG',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': null,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 16,
              'unit': null
            },
            {
              'fixedValue': false,
              'pfc': 14,
              'ptc': 3,
              'length': 14,
              'name': 'GENE_AM_CCSDSCOUNT',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': null,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 18,
              'unit': null
            },
            {
              'fixedValue': false,
              'pfc': 16,
              'ptc': 3,
              'length': 16,
              'name': 'GENE_AM_CCSDSPLGTH',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': null,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 32,
              'unit': null
            }
          ]
        },
        {
          'repetitionNumber': 0,
          'parameterRef': null,
          'name': 'GENE_HD_TMPUSHDR',
          'subContainers': [
            {
              'fixedValue': true,
              'pfc': 1,
              'ptc': 3,
              'length': 1,
              'name': 'GENE_AM_ZSPARE01',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': 0,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 48,
              'unit': null
            },
            {
              'fixedValue': true,
              'pfc': 3,
              'ptc': 3,
              'length': 3,
              'name': 'GENE_AM_PUSVERSION',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': 1,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 49,
              'unit': null
            },
            {
              'fixedValue': true,
              'pfc': 4,
              'ptc': 3,
              'length': 4,
              'name': 'GENE_AM_ZSPARE04',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': 0,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 52,
              'unit': null
            },
            {
              'fixedValue': true,
              'pfc': 8,
              'ptc': 3,
              'length': 8,
              'name': 'GENE_AM_PUSSERVICE',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': 3,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 56,
              'unit': null
            },
            {
              'fixedValue': true,
              'pfc': 8,
              'ptc': 3,
              'length': 8,
              'name': 'GENE_AM_PUSSUBTYPE',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': 25,
                'valueType': 'Integer'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 64,
              'unit': null
            },
            {
              'fixedValue': false,
              'pfc': 18,
              'ptc': 9,
              'length': 56,
              'name': 'TIME',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': null,
                'valueType': 'AbsoluteTime'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 72,
              'unit': null
            }
          ]
        },
        {
          'fixedValue': true,
          'pfc': 8,
          'ptc': 3,
          'length': 8,
          'name': 'SID',
          'description': null,
          'rawData': null,
          'rawValue': {
            'value': 1,
            'valueType': 'Integer'
          },
          'physicalValue': null,
          'calibration': null,
          'monitorings': null,
          'offset': 128,
          'unit': null
        },
        {
          'fixedValue': false,
          'pfc': 16,
          'ptc': 3,
          'length': 16,
          'name': 'BATTERY_BUS_VOLTAGE',
          'description': 'Battery bus voltage',
          'rawData': null,
          'rawValue': {
            'value': null,
            'valueType': 'Integer'
          },
          'physicalValue': null,
          'calibration': {
            'coefficients': [
              {
                'factor': 0.001,
                'exponent': 1.0
              }
            ]
          },
          'monitorings': null,
          'offset': 136,
          'unit': {
            'unit': 'V',
            'power': 1.0,
            'factor': 1.0,
            'description': 'V'
          }
        },
        {
          'fixedValue': false,
          'pfc': 16,
          'ptc': 3,
          'length': 16,
          'name': 'BATTERY_BUS_CURRENT',
          'description': 'Battery bus current',
          'rawData': null,
          'rawValue': {
            'value': null,
            'valueType': 'Integer'
          },
          'physicalValue': null,
          'calibration': {
            'coefficients': [
              {
                'factor': 0.001,
                'exponent': 1.0
              }
            ]
          },
          'monitorings': null,
          'offset': 152,
          'unit': {
            'unit': 'A',
            'power': 1.0,
            'factor': 1.0,
            'description': 'A'
          }
        },
        {
          'repetitionNumber': 0,
          'parameterRef': null,
          'name': 'GENE_TR_TMTRAILER',
          'subContainers': [
            {
              'fixedValue': false,
              'pfc': 2,
              'ptc': 7,
              'length': 16,
              'name': 'GENE_AM_ZCRCPEC',
              'description': null,
              'rawData': null,
              'rawValue': {
                'value': null,
                'valueType': 'Binary'
              },
              'physicalValue': null,
              'calibration': null,
              'monitorings': null,
              'offset': 168,
              'unit': null
            }
          ]
        }
      ]
    }
  }
];

