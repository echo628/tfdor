define(['app', 'service', 'sysCode'], function (app) {
    "use strict";
    app.controller('passwordMngCtrl', function (service, $scope) {
        $scope.channelId = service.getUser().channel.channelId;
        $scope.doIt = function () {
            if ($scope.userId == null || $scope.userId == '') {
                showError("请输入登陆ID");
                return;
            }
            var formData = {
                "userId" : $scope.userId
            };
            service.post2SRV("queryUserById.do", formData, function (data, status) {
                $scope.userInfo = data;
            }, 1000);
        };

        $scope.resetPwd = function(){
            var formData = {
                userId:$scope.userInfo.userId
            }
            service.post2SRV("resetPwd.do", formData, function (data, status) {
                showInfo("重置成功");
            }, 1000);
        }
    });
});