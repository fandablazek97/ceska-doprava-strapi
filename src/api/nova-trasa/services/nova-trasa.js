'use strict';

/**
 * nova-trasa service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nova-trasa.nova-trasa');
