import React, { useEffect, useState } from 'react';

import { Scene } from '@antv/l7';
import { DrillDownLayer } from '@antv/l7-district';
import { Mapbox } from '@antv/l7-maps';

/** 地图配置 */

// 我选择的事全国地图，name和对应的code都是antv l7官方提供的，
// value字段及字段名是可以自定义的


const StudentPostion: React.FC = () => {
 const draw = () => {
 	/** scene这个实例一定要在dom渲染完成之后创建 */
    const scene = new Scene({
    /** 传入需要渲染的dom节点的id */
      id: 'map',
      /** 渲染的地图会有一个antv的logo,可以让其消失 */
      logoVisible: false,
      map: new Mapbox({
        center: [116.2825, 49.9],
        pitch: 0,
        /** 其实这是一张世界地图，通过blank将除中国外的地方变为空白 */
        style: 'blank',
        zoom: 1,
        minZoom: 2,
        maxZoom: 5,
      }),
    });

    scene.on('loaded', () => {
      new DrillDownLayer(scene, {
      	/** 创建的数据，绑定到data字段进行渲染 */
        data: [],
        viewStart: 'Country',
        viewEnd: 'City',
        /** 地图文字颜色 */
        fill: {
          color: {
       /** field 字段传入数据里面的具体值的字段名称 */
            field: 'NAME_CHN',
       /** 根据值的大小会渲染以下的颜色，值越大，会渲染数组靠后的颜色 */
            values: [ '#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70' ],
          },
        },
        /** 鼠标放上去的提示框内容渲染，相当于echarts的tooltip */
        popup: {
          enable: true,
          Html: (props: any) => {
            return `<span>${props.NAME_CHN}</span>`;
          },
        },
      });
    });
  };

  useEffect(() => {
    draw();
  }, []);

  return (
      <div id="map" style={{height: '460px',justifyContent: 'center',position: 'relative'}}>
      </div>
  );
};

export default StudentPostion;
