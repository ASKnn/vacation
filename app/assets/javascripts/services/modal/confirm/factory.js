/*jslint vars: true, browser: true , nomen: true, indent: 2*/
/*global angular */

angular.module("modals.confirm").factory("confirmModal", ["$modal", "objectUtils", function ($modal, objectUtils) {
  "use strict";

  function open(options) {
    var defaults = {
      title: "Are you really really sure?"
    };

    var modal = $modal.open({
      templateUrl: "services/modal/confirm/template.html",
      controller: "confirmModalController",
      resolve: {
        attributes: function () {
          return objectUtils.merge(defaults, options);
        }
      }
    });

    return modal.result;
  }

  return {
    open: open
  };
}]);
