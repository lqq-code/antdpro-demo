import { Card, Radio, Typography, Statistic } from 'antd';
import numeral from 'numeral';
import type { RadioChangeEvent } from 'antd/es/radio';
import { Donut } from '@ant-design/charts';
import type { DonutConfig } from '@ant-design/charts/es/donut';
import React from 'react';
import type { DataItem } from '../data.d';
import styles from '../style.less';

const { Text } = Typography;

const ProportionSales = ({
  dropdownGroup,
  salesType,
  loading,
  salesPieData,
  handleChangeSalesType,
}: {
  loading: boolean;
  dropdownGroup: React.ReactNode;
  salesType: 'all' | 'online' | 'stores';
  salesPieData: DataItem[];
  handleChangeSalesType?: (e: RadioChangeEvent) => void;
}) => (
  <>
    <Card
      loading={loading}
      className={styles.salesCard}
      bordered={false}
      title=""
      style={{
        height: '22%',
        marginBottom: 20,
      }}
    >
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Statistic valueStyle={{ color: '#3f8600' }} title="Active Users" value={202893} />
      </div>
    </Card>
    <Card
      loading={loading}
      className={styles.salesCard}
      bordered={false}
      title=""
      style={{
        height: '22%',
        marginBottom: 20,
      }}
    >
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Statistic   valueStyle={{ color: '#cf1322' }} title="Active Users" value={230487234} />
      </div>
    </Card>
    <Card
      loading={loading}
      className={styles.salesCard}
      bordered={false}
      title=""
      style={{
        height: '22%',
        marginBottom: 20,
      }}
    >
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Statistic  valueStyle={{ color: '#3f8600' }} title="Active Users" value={786342} />
      </div>
    </Card>
    <Card
      loading={loading}
      className={styles.salesCard}
      bordered={false}
      title=""
      style={{
        height: '22%',
      }}
    >
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Statistic  valueStyle={{ color: '#cf1322' }} title="Active Users" value={3457020} />
      </div>
    </Card>
  </>
);

export default ProportionSales;
