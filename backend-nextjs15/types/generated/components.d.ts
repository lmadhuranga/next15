import type { Schema, Struct } from '@strapi/strapi';

export interface WidgetsHomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_widgets_home_banners';
  info: {
    displayName: 'HomeBanner';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'widgets.home-banner': WidgetsHomeBanner;
    }
  }
}
