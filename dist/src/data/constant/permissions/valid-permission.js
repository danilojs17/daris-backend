"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidPermission = void 0;
var ValidPermission;
(function (ValidPermission) {
    ValidPermission["sources_knx_read"] = "sources:knx:read";
    ValidPermission["sources_knx_create"] = "sources:knx:create";
    ValidPermission["sources_knx_update"] = "sources:knx:update";
    ValidPermission["sources_knx_delete"] = "sources:knx:delete";
    ValidPermission["sources_modbus_read"] = "sources:modbus:read";
    ValidPermission["sources_modbus_create"] = "sources:modbus:create";
    ValidPermission["sources_modbus_update"] = "sources:modbus:update";
    ValidPermission["sources_modbus_delete"] = "sources:modbus:delete";
    ValidPermission["sources_state_update"] = "sources:state:update";
    ValidPermission["sources_delete_bulk"] = "sources:delete:bulk";
    ValidPermission["setings_user_read"] = "settings:user:read";
    ValidPermission["setings_user_create"] = "settings:user:create";
    ValidPermission["setings_user_update"] = "settings:user:update";
    ValidPermission["setings_user_state_update"] = "settings:user:state:update";
    ValidPermission["setings_user_delete"] = "settings:user:delete";
    ValidPermission["setings_user_delete_bulk"] = "settings:user:delete:bulk";
    ValidPermission["knx_dg_read"] = "knx:dg:read";
    ValidPermission["knx_dpt_read"] = "knx:dpt:read";
    ValidPermission["knx_dg_create"] = "knx:dg:create";
    ValidPermission["knx_dg_update_state"] = "knx:dg:state:update";
    ValidPermission["knx_dg_update"] = "knx:dg:update";
    ValidPermission["knx_dg_delete"] = "knx:dg:delete";
    ValidPermission["knx_dg_delete_bulk"] = "knx:dg:delete:bulk";
    ValidPermission["settings_roles_read"] = "settings:roles:read";
    ValidPermission["settings_roles_create"] = "settings:roles:create";
    ValidPermission["settings_roles_update"] = "settings:roles:update";
    ValidPermission["settings_roles_state_update"] = "settings:roles:state:update";
    ValidPermission["settings_roles_delete"] = "settings:roles:delete";
    ValidPermission["modbus_register_read"] = "modbus:register:read";
    ValidPermission["modbus_register_create"] = "modbus:register:create";
    ValidPermission["modbus_register_update"] = "modbus:register:update";
    ValidPermission["modbus_register_state_update"] = "modbus:register:state:update";
    ValidPermission["modbus_register_delete"] = "modbus:register:delete";
    ValidPermission["block_request"] = "no:one:can:use:this:command";
    ValidPermission["access_staff_read"] = "access:staff:read";
    ValidPermission["access_staff_create"] = "access:staff:create";
    ValidPermission["access_staff_update"] = "access:staff:update";
    ValidPermission["access_staff_delete"] = "access:staff:delete";
    ValidPermission["access_staff_permissions_create"] = "access:staff:permissions:create";
    ValidPermission["access_staff_permissions_read"] = "access:staff:permissions:read";
    ValidPermission["access_staff_permissions_update"] = "access:staff:permissions:update";
    ValidPermission["access_staff_permissions_delete"] = "access:staff:permissions:delete";
    ValidPermission["access_locks_actuator_read"] = "access:locks:actuator:read";
    ValidPermission["access_locks_actuator_create"] = "access:locks:actuator:create";
    ValidPermission["access_locks_actuator_update"] = "access:locks:actuator:update";
    ValidPermission["access_locks_actuator_delete"] = "access:locks:actuator:delete";
    ValidPermission["access_areas_permissions_create"] = "access:areas:permissions:create";
    ValidPermission["access_areas_permissions_read"] = "access:areas:permissions:read";
    ValidPermission["access_areas_permissions_update"] = "access:areas:permissions:update";
    ValidPermission["access_areas_permissions_delete"] = "access:areas:permissions:delete";
    ValidPermission["access_areas_create"] = "access:areas:create";
    ValidPermission["access_areas_read"] = "access:areas:read";
    ValidPermission["access_areas_update"] = "access:areas:update";
    ValidPermission["access_areas_delete"] = "access:areas:delete";
    ValidPermission["camera_type_create"] = "camera:type:create";
    ValidPermission["camera_type_read"] = "camera:type:read";
    ValidPermission["camera_type_update"] = "camera:type:update";
    ValidPermission["camera_type_delete"] = "camera:type:delete";
    ValidPermission["camera_create"] = "camera:create";
    ValidPermission["camera_read"] = "camera:read";
    ValidPermission["camera_update"] = "camera:update";
    ValidPermission["camera_delete"] = "camera:delete";
    ValidPermission["access_historical_create"] = "access:historical:create";
    ValidPermission["access_historical_read"] = "access:historical:read";
    ValidPermission["access_historical_update"] = "access:historical:update";
    ValidPermission["access_historical_delete"] = "access:historical:delete";
    ValidPermission["access_historical_delete_bulk"] = "access:historical:delete:bulk";
    ValidPermission["access_keys_create"] = "access:keys:create";
    ValidPermission["access_keys_send_qr"] = "access:keys:send:qr";
    ValidPermission["access_keys_read"] = "access:keys:read";
    ValidPermission["access_keys_update"] = "access:keys:update";
    ValidPermission["access_keys_delete"] = "access:keys:delete";
    ValidPermission["access_levels_create"] = "access:levels:create";
    ValidPermission["access_levels_read"] = "access:levels:read";
    ValidPermission["access_levels_update"] = "access:levels:update";
    ValidPermission["access_levels_delete"] = "access:levels:delete";
    ValidPermission["access_levels_delete_bulk"] = "access:levels:delete:bulk";
    ValidPermission["access_levels_state_update"] = "access:levels:state:update";
    ValidPermission["access_lock_permissions_create"] = "access:lock:permissions:create";
    ValidPermission["access_lock_permissions_read"] = "access:lock:permissions:read";
    ValidPermission["access_lock_permissions_update"] = "access:lock:permissions:update";
    ValidPermission["access_lock_permissions_delete"] = "access:lock:permissions:delete";
    ValidPermission["access_lock_create"] = "access:lock:create";
    ValidPermission["access_lock_read"] = "access:lock:read";
    ValidPermission["access_lock_update"] = "access:lock:update";
    ValidPermission["access_lock_delete"] = "access:lock:delete";
    ValidPermission["access_logger_create"] = "access:logger:create";
    ValidPermission["access_logger_read"] = "access:logger:read";
    ValidPermission["access_logger_delete"] = "access:logger:delete";
    ValidPermission["access_logger_delete_bulk"] = "access:logger:delete:bulk";
    ValidPermission["settings_mail_server_create"] = "settings:mail:server:create";
    ValidPermission["settings_mail_server_read"] = "settings:mail:server:read";
    ValidPermission["settings_mail_server_update"] = "settings:mail:server:update";
    ValidPermission["settings_mail_server_delete"] = "settings:mail:server:delete";
    ValidPermission["settings_permissions_read"] = "settings:permissions:read";
    ValidPermission["access_locks_scanners_create"] = "access:locks:scanners:create";
    ValidPermission["access_locks_scanners_read"] = "access:locks:scanners:read";
    ValidPermission["access_locks_scanners_update"] = "access:locks:scanners:update";
    ValidPermission["access_locks_scanners_delete"] = "access:locks:scanners:delete";
    ValidPermission["access_areas_schedules_create"] = "access:areas:schedules:create";
    ValidPermission["access_areas_schedules_read"] = "access:areas:schedules:read";
    ValidPermission["access_areas_schedules_update"] = "access:areas:schedules:update";
    ValidPermission["access_areas_schedules_delete"] = "access:areas:schedules:delete";
    ValidPermission["access_locks_schedules_create"] = "access:locks:schedules:create";
    ValidPermission["access_locks_schedules_read"] = "access:locks:schedules:read";
    ValidPermission["access_locks_schedules_update"] = "access:locks:schedules:update";
    ValidPermission["access_locks_schedules_delete"] = "access:locks:schedules:delete";
    ValidPermission["monitoring_ping_create"] = "monitoring:ping:create";
    ValidPermission["monitoring_ping_read"] = "monitoring:ping:read";
    ValidPermission["monitoring_ping_update"] = "monitoring:ping:update";
    ValidPermission["monitoring_ping_delete"] = "monitoring:ping:delete";
    ValidPermission["monitoring_ping_log_create"] = "monitoring:ping:log:create";
    ValidPermission["monitoring_ping_log_read"] = "monitoring:ping:log:read";
    ValidPermission["monitoring_ping_log_update"] = "monitoring:ping:log:update";
    ValidPermission["monitoring_ping_log_delete"] = "monitoring:ping:log:delete";
    ValidPermission["preset_types_create"] = "preset:types:create";
    ValidPermission["preset_types_read"] = "preset:types:read";
    ValidPermission["preset_types_update"] = "preset:types:update";
    ValidPermission["preset_types_delete"] = "preset:types:delete";
    ValidPermission["presets_create"] = "presets:create";
    ValidPermission["presets_read"] = "presets:read";
    ValidPermission["presets_update"] = "presets:update";
    ValidPermission["presets_delete"] = "presets:delete";
    ValidPermission["access_staff_schedules_create"] = "access:staff:schedules:create";
    ValidPermission["access_staff_schedules_read"] = "access:staff:schedules:read";
    ValidPermission["access_staff_schedules_update"] = "access:staff:schedules:update";
    ValidPermission["access_staff_schedules_delete"] = "access:staff:schedules:delete";
    ValidPermission["settings_system_time_update"] = "settings:system:time:update";
    ValidPermission["settings_system_read"] = "settings:system:read";
    ValidPermission["settings_logger_read"] = "settings:logger:read";
    ValidPermission["settings_logger_delete"] = "settings:logger:delete";
})(ValidPermission = exports.ValidPermission || (exports.ValidPermission = {}));
//# sourceMappingURL=valid-permission.js.map