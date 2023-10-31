import React, { FC, MouseEventHandler } from 'react';

import Icon_search_48_line from '../assets/icons/icon_search_48_line.svg';
import Icon_zoom_in_48_line from '../assets/icons/icon_zoom_in_48_line.svg';
import Icon_zoom_in_48_filled from '../assets/icons/icon_zoom_in_48_filled.svg';
import Icon_zoom_out_48_line from '../assets/icons/icon_zoom_out_48_line.svg';
import Icon_zoom_out_48_filled from '../assets/icons/icon_zoom_out_48_filled.svg';
import Icon_setting_48_line from '../assets/icons/icon_setting_48_line.svg';
import Icon_setting_48_filled from '../assets/icons/icon_setting_48_filled.svg';
import Icon_check_48_line from '../assets/icons/icon_check_48_line.svg';
import Icon_check_circle_48_line from '../assets/icons/icon_check_circle_48_line.svg';
import Icon_check_circle_48_filled from '../assets/icons/icon_check_circle_48_filled.svg';
import Icon_info_48_line from '../assets/icons/icon_info_48_line.svg';
import Icon_info_48_filled from '../assets/icons/icon_info_48_filled.svg';
import Icon_heart_48_line from '../assets/icons/icon_heart_48_line.svg';
import Icon_heart_48_filled from '../assets/icons/icon_heart_48_filled.svg';
import Icon_star_48_line from '../assets/icons/icon_star_48_line.svg';
import Icon_star_48_filled from '../assets/icons/icon_star_48_filled.svg';
import Icon_bookmark_48_line from '../assets/icons/icon_bookmark_48_line.svg';
import Icon_bookmark_48_filled from '../assets/icons/icon_bookmark_48_filled.svg';
import Icon_trending_up_48_line from '../assets/icons/icon_trending_up_48_line.svg';
import Icon_trending_down_48_line from '../assets/icons/icon_trending_down_48_line.svg';
import Icon_repair_48_line from '../assets/icons/icon_repair_48_line.svg';
import Icon_repair_48_filled from '../assets/icons/icon_repair_48_filled.svg';
import Icon_lock_48_line from '../assets/icons/icon_lock_48_line.svg';
import Icon_lock_48_filled from '../assets/icons/icon_lock_48_filled.svg';
import Icon_lock_2_48_line from '../assets/icons/icon_lock_2_48_line.svg';
import Icon_lock_2_48_filled from '../assets/icons/icon_lock_2_48_filled.svg';
import Icon_lock_open_48_line from '../assets/icons/icon_lock_open_48_line.svg';
import Icon_lock_open_48_filled from '../assets/icons/icon_lock_open_48_filled.svg';
import Icon_pending_48_line from '../assets/icons/icon_pending_48_line.svg';
import Icon_pending_48_filled from '../assets/icons/icon_pending_48_filled.svg';
import Icon_manage_account_48_line from '../assets/icons/icon_manage_account_48_line.svg';
import Icon_manage_account_48_filled from '../assets/icons/icon_manage_account_48_filled.svg';
import Icon_paid_48_line from '../assets/icons/icon_paid_48_line.svg';
import Icon_paid_48_filled from '../assets/icons/icon_paid_48_filled.svg';
import Icon_hourglass_48_line from '../assets/icons/icon_hourglass_48_line.svg';
import Icon_hourglass_48_filled from '../assets/icons/icon_hourglass_48_filled.svg';
import Icon_delete_48_line from '../assets/icons/icon_delete_48_line.svg';
import Icon_delete_48_filled from '../assets/icons/icon_delete_48_filled.svg';
import Icon_time_48_line from '../assets/icons/icon_time_48_line.svg';
import Icon_time_48_filled from '../assets/icons/icon_time_48_filled.svg';
import Icon_timer_48_line from '../assets/icons/icon_timer_48_line.svg';
import Icon_timer_48_filled from '../assets/icons/icon_timer_48_filled.svg';
import Icon_average_time_48_line from '../assets/icons/icon_average_time_48_line.svg';
import Icon_average_time_48_filled from '../assets/icons/icon_average_time_48_filled.svg';
import Icon_time_step_48_line from '../assets/icons/icon_time_step_48_line.svg';
import Icon_time_step_48_filled from '../assets/icons/icon_time_step_48_filled.svg';
import Icon_visibility_48_line from '../assets/icons/icon_visibility_48_line.svg';
import Icon_visibility_48_filled from '../assets/icons/icon_visibility_48_filled.svg';
import Icon_visibility_off_48_line from '../assets/icons/icon_visibility_off_48_line.svg';
import Icon_visibility_off_48_filled from '../assets/icons/icon_visibility_off_48_filled.svg';
import Icon_chart_48_line from '../assets/icons/icon_chart_48_line.svg';
import Icon_chart_48_filled from '../assets/icons/icon_chart_48_filled.svg';
import Icon_output_48_line from '../assets/icons/icon_output_48_line.svg';
import Icon_open_in_new_48_line from '../assets/icons/icon_open_in_new_48_line.svg';
import Icon_m_48_line from '../assets/icons/icon_m_48_line.svg';
import Icon_m_48_filled from '../assets/icons/icon_m_48_filled.svg';
import Icon_tips_48_line from '../assets/icons/icon_tips_48_line.svg';
import Icon_tips_48_filled from '../assets/icons/icon_tips_48_filled.svg';
import Icon_puzzle_48_line from '../assets/icons/icon_puzzle_48_line.svg';
import Icon_puzzle_48_filled from '../assets/icons/icon_puzzle_48_filled.svg';
import Icon_rocket_48_line from '../assets/icons/icon_rocket_48_line.svg';
import Icon_rocket_48_filled from '../assets/icons/icon_rocket_48_filled.svg';
import Icon_shield_48_line from '../assets/icons/icon_shield_48_line.svg';
import Icon_shield_48_filled from '../assets/icons/icon_shield_48_filled.svg';
import Icon_filter_48_line from '../assets/icons/icon_filter_48_line.svg';
import Icon_list_48_line from '../assets/icons/icon_list_48_line.svg';
import Icon_move_48_line from '../assets/icons/icon_move_48_line.svg';
import Icon_list_view_48_line from '../assets/icons/icon_list_view_48_line.svg';
import Icon_edit_48_line from '../assets/icons/icon_edit_48_line.svg';
import Icon_edit_48_filled from '../assets/icons/icon_edit_48_filled.svg';
import Icon_write_48_line from '../assets/icons/icon_write_48_line.svg';
import Icon_write_48_filled from '../assets/icons/icon_write_48_filled.svg';
import Icon_guide_48_line from '../assets/icons/icon_guide_48_line.svg';
import Icon_guide_48_filled from '../assets/icons/icon_guide_48_filled.svg';
import Icon_title_48_line from '../assets/icons/icon_title_48_line.svg';
import Icon_italic_48_line from '../assets/icons/icon_italic_48_line.svg';
import Icon_underlined_48_line from '../assets/icons/icon_underlined_48_line.svg';
import Icon_underlined_u_48_line from '../assets/icons/icon_underlined_u_48_line.svg';
import Icon_strikethrough_48_line from '../assets/icons/icon_strikethrough_48_line.svg';
import Icon_strikethrough_s_48_line from '../assets/icons/icon_strikethrough_s_48_line.svg';
import Icon_bold_48_line from '../assets/icons/icon_bold_48_line.svg';
import Icon_link_48_line from '../assets/icons/icon_link_48_line.svg';
import Icon_unlink_48_line from '../assets/icons/icon_unlink_48_line.svg';
import Icon_attach_file_48_line from '../assets/icons/icon_attach_file_48_line.svg';
import Icon_enter_48_line from '../assets/icons/icon_enter_48_line.svg';
import Icon_close_48_line from '../assets/icons/icon_close_48_line.svg';
import Icon_clear_48_line from '../assets/icons/icon_clear_48_line.svg';
import Icon_clear_48_filled from '../assets/icons/icon_clear_48_filled.svg';
import Icon_back_48_line from '../assets/icons/icon_back_48_line.svg';
import Icon_next_48_line from '../assets/icons/icon_next_48_line.svg';
import Icon_more_vert_24_line from '../assets/icons/icon_more_vert_24_line.svg';
import Icon_more_horiz_48_line from '../assets/icons/icon_more_horiz_48_line.svg';
import Icon_arrow_left_48_line from '../assets/icons/icon_arrow_left_48_line.svg';
import Icon_arrow_right_48_line from '../assets/icons/icon_arrow_right_48_line.svg';
import Icon_arrow_top_48_line from '../assets/icons/icon_arrow_top_48_line.svg';
import Icon_arrow_bottom_48_line from '../assets/icons/icon_arrow_bottom_48_line.svg';
import Icon_arrow_upward_48_line from '../assets/icons/icon_arrow_upward_48_line.svg';
import Icon_arrow_downward_48_line from '../assets/icons/icon_arrow_downward_48_line.svg';
import Icon_arrow_diagonal_up_48_line from '../assets/icons/icon_arrow_diagonal_up_48_line.svg';
import Icon_arrow_diagonal_down_48_line from '../assets/icons/icon_arrow_diagonal_down_48_line.svg';
import Icon_subdirectory_48_line from '../assets/icons/icon_subdirectory_48_line.svg';
import Icon_sort_48_line from '../assets/icons/icon_sort_48_line.svg';
import Icon_sort_48_filled from '../assets/icons/icon_sort_48_filled.svg';
import Icon_sort_down_48_line from '../assets/icons/icon_sort_down_48_line.svg';
import Icon_sort_up_48_line from '../assets/icons/icon_sort_up_48_line.svg';
import Icon_refresh_48_line from '../assets/icons/icon_refresh_48_line.svg';
import Icon_refresh_disabled_48_line from '../assets/icons/icon_refresh_disabled_48_line.svg';
import Icon_loading_48_line from '../assets/icons/icon_loading_48_line.svg';
import Icon_reset_48_line from '../assets/icons/icon_reset_48_line.svg';
import Icon_update_48_line from '../assets/icons/icon_update_48_line.svg';
import Icon_skip_back_48_line from '../assets/icons/icon_skip_back_48_line.svg';
import Icon_skip_next_48_line from '../assets/icons/icon_skip_next_48_line.svg';
import Icon_arrow_drop_down_48_line from '../assets/icons/icon_arrow_drop_down_48_line.svg';
import Icon_arrow_drop_down_48_filled from '../assets/icons/icon_arrow_drop_down_48_filled.svg';
import Icon_arrow_drop_up_48_line from '../assets/icons/icon_arrow_drop_up_48_line.svg';
import Icon_arrow_drop_up_48_filled from '../assets/icons/icon_arrow_drop_up_48_filled.svg';
import Icon_open_in_full_48_line from '../assets/icons/icon_open_in_full_48_line.svg';
import Icon_close_fullscreen_48_line from '../assets/icons/icon_close_fullscreen_48_line.svg';
import Icon_drag_handler_48_line from '../assets/icons/icon_drag_handler_48_line.svg';
import Icon_up_s_48_line from '../assets/icons/icon_up_s_48_line.svg';
import Icon_up_s_48_filled from '../assets/icons/icon_up_s_48_filled.svg';
import Icon_down_s_48_line from '../assets/icons/icon_down_s_48_line.svg';
import Icon_down_s_48_filled from '../assets/icons/icon_down_s_48_filled.svg';
import Icon_up_l_48_line from '../assets/icons/icon_up_l_48_line.svg';
import Icon_up_l_48_filled from '../assets/icons/icon_up_l_48_filled.svg';
import Icon_align_left_48_line from '../assets/icons/icon_align_left_48_line.svg';
import Icon_align_center_48_line from '../assets/icons/icon_align_center_48_line.svg';
import Icon_align_right_48_line from '../assets/icons/icon_align_right_48_line.svg';
import Icon_person_48_line from '../assets/icons/icon_person_48_line.svg';
import Icon_person_48_filled from '../assets/icons/icon_person_48_filled.svg';
import Icon_people_48_line from '../assets/icons/icon_people_48_line.svg';
import Icon_people_48_filled from '../assets/icons/icon_people_48_filled.svg';
import Icon_score1_48_line from '../assets/icons/icon_score1_48_line.svg';
import Icon_score1_48_filled from '../assets/icons/icon_score1_48_filled.svg';
import Icon_score2_48_line from '../assets/icons/icon_score2_48_line.svg';
import Icon_score2_48_filled from '../assets/icons/icon_score2_48_filled.svg';
import Icon_score3_48_line from '../assets/icons/icon_score3_48_line.svg';
import Icon_score3_48_filled from '../assets/icons/icon_score3_48_filled.svg';
import Icon_score4_48_line from '../assets/icons/icon_score4_48_line.svg';
import Icon_score4_48_filled from '../assets/icons/icon_score4_48_filled.svg';
import Icon_score5_48_line from '../assets/icons/icon_score5_48_line.svg';
import Icon_score5_48_filled from '../assets/icons/icon_score5_48_filled.svg';
import Icon_key_48_line from '../assets/icons/icon_key_48_line.svg';
import Icon_key_48_filled from '../assets/icons/icon_key_48_filled.svg';
import Icon_email_48_line from '../assets/icons/icon_email_48_line.svg';
import Icon_email_48_filled from '../assets/icons/icon_email_48_filled.svg';
import Icon_message_48_line from '../assets/icons/icon_message_48_line.svg';
import Icon_message_48_filled from '../assets/icons/icon_message_48_filled.svg';
import Icon_marketing_48_line from '../assets/icons/icon_marketing_48_line.svg';
import Icon_marketing_48_filled from '../assets/icons/icon_marketing_48_filled.svg';
import Icon_stock_carts_48_line from '../assets/icons/icon_stock_carts_48_line.svg';
import Icon_construction_eng_48_line from '../assets/icons/icon_construction_eng_48_line.svg';
import Icon_like_48_line from '../assets/icons/icon_like_48_line.svg';
import Icon_like_48_filled from '../assets/icons/icon_like_48_filled.svg';
import Icon_insurance_48_line from '../assets/icons/icon_insurance_48_line.svg';
import Icon_insurance_2_48_line from '../assets/icons/icon_insurance_2_48_line.svg';
import Icon_science_48_line from '../assets/icons/icon_science_48_line.svg';
import Icon_science_48_filled from '../assets/icons/icon_science_48_filled.svg';
import Icon_rnd_48_line from '../assets/icons/icon_rnd_48_line.svg';
import Icon_work_48_line from '../assets/icons/icon_work_48_line.svg';
import Icon_work_48_filled from '../assets/icons/icon_work_48_filled.svg';
import Icon_briefcase_48_line from '../assets/icons/icon_briefcase_48_line.svg';
import Icon_journal_48_line from '../assets/icons/icon_journal_48_line.svg';
import Icon_send_48_line from '../assets/icons/icon_send_48_line.svg';
import Icon_send_48_filled from '../assets/icons/icon_send_48_filled.svg';
import Icon_objective_48_line from '../assets/icons/icon_objective_48_line.svg';
import Icon_key_result_48_line from '../assets/icons/icon_key_result_48_line.svg';
import Icon_target_48_line from '../assets/icons/icon_target_48_line.svg';
import Icon_medical_48_line from '../assets/icons/icon_medical_48_line.svg';
import Icon_medical_48_filled from '../assets/icons/icon_medical_48_filled.svg';
import Icon_healthcare_48_line from '../assets/icons/icon_healthcare_48_line.svg';
import Icon_healthcare_48_filled from '../assets/icons/icon_healthcare_48_filled.svg';
import Icon_backpack_48_line from '../assets/icons/icon_backpack_48_line.svg';
import Icon_backpack_48_filled from '../assets/icons/icon_backpack_48_filled.svg';
import Icon_book_48_line from '../assets/icons/icon_book_48_line.svg';
import Icon_book_48_filled from '../assets/icons/icon_book_48_filled.svg';
import Icon_graduation_48_line from '../assets/icons/icon_graduation_48_line.svg';
import Icon_graduation_48_filled from '../assets/icons/icon_graduation_48_filled.svg';
import Icon_trophy_48_line from '../assets/icons/icon_trophy_48_line.svg';
import Icon_trophy_48_filled from '../assets/icons/icon_trophy_48_filled.svg';
import Icon_certificate_48_line from '../assets/icons/icon_certificate_48_line.svg';
import Icon_gift_48_line from '../assets/icons/icon_gift_48_line.svg';
import Icon_gift_48_filled from '../assets/icons/icon_gift_48_filled.svg';
import Icon_airplane_48_line from '../assets/icons/icon_airplane_48_line.svg';
import Icon_airplane_48_filled from '../assets/icons/icon_airplane_48_filled.svg';
import Icon_globe_48_line from '../assets/icons/icon_globe_48_line.svg';
import Icon_globe_48_filled from '../assets/icons/icon_globe_48_filled.svg';
import Icon_military_48_line from '../assets/icons/icon_military_48_line.svg';
import Icon_military_48_filled from '../assets/icons/icon_military_48_filled.svg';
import Icon_military_cap_48_line from '../assets/icons/icon_military_cap_48_line.svg';
import Icon_military_cap_48_filled from '../assets/icons/icon_military_cap_48_filled.svg';
import Icon_penalty_48_line from '../assets/icons/icon_penalty_48_line.svg';
import Icon_penalty_48_filled from '../assets/icons/icon_penalty_48_filled.svg';
import Icon_veteran_48_line from '../assets/icons/icon_veteran_48_line.svg';
import Icon_veteran_48_filled from '../assets/icons/icon_veteran_48_filled.svg';
import Icon_disabled_48_line from '../assets/icons/icon_disabled_48_line.svg';
import Icon_add_48_line from '../assets/icons/icon_add_48_line.svg';
import Icon_add_circle_48_line from '../assets/icons/icon_add_circle_48_line.svg';
import Icon_add_circle_48_filled from '../assets/icons/icon_add_circle_48_filled.svg';
import Icon_remove_48_line from '../assets/icons/icon_remove_48_line.svg';
import Icon_remove_circle_48_line from '../assets/icons/icon_remove_circle_48_line.svg';
import Icon_remove_circle_48_filled from '../assets/icons/icon_remove_circle_48_filled.svg';
import Icon_upload_48_line from '../assets/icons/icon_upload_48_line.svg';
import Icon_download_48_line from '../assets/icons/icon_download_48_line.svg';
import Icon_flag_48_line from '../assets/icons/icon_flag_48_line.svg';
import Icon_flag_48_filled from '../assets/icons/icon_flag_48_filled.svg';
import Icon_inbox_48_line from '../assets/icons/icon_inbox_48_line.svg';
import Icon_folder_48_line from '../assets/icons/icon_folder_48_line.svg';
import Icon_folder_48_filled from '../assets/icons/icon_folder_48_filled.svg';
import Icon_add_folder_48_line from '../assets/icons/icon_add_folder_48_line.svg';
import Icon_file_48_line from '../assets/icons/icon_file_48_line.svg';
import Icon_no_file_48_line from '../assets/icons/icon_no_file_48_line.svg';
import Icon_file_done_48_line from '../assets/icons/icon_file_done_48_line.svg';
import Icon_file_copy_48_line from '../assets/icons/icon_file_copy_48_line.svg';
import Icon_file_copy_48_filled from '../assets/icons/icon_file_copy_48_filled.svg';
import Icon_unable_file_48_line from '../assets/icons/icon_unable_file_48_line.svg';
import Icon_change_code_48_line from '../assets/icons/icon_change_code_48_line.svg';
import Icon_complete_edit_48_line from '../assets/icons/icon_complete_edit_48_line.svg';
import Icon_add_file_48_line from '../assets/icons/icon_add_file_48_line.svg';
import Icon_list_output_48_line from '../assets/icons/icon_list_output_48_line.svg';
import Icon_result_save_48_line from '../assets/icons/icon_result_save_48_line.svg';
import Icon_task_48_line from '../assets/icons/icon_task_48_line.svg';
import Icon_task_48_filled from '../assets/icons/icon_task_48_filled.svg';
import Icon_assignment_48_line from '../assets/icons/icon_assignment_48_line.svg';
import Icon_assignment_48_filled from '../assets/icons/icon_assignment_48_filled.svg';
import Icon_assignment_ind_48_line from '../assets/icons/icon_assignment_ind_48_line.svg';
import Icon_assignment_ind_48_filled from '../assets/icons/icon_assignment_ind_48_filled.svg';
import Icon_record_48_line from '../assets/icons/icon_record_48_line.svg';
import Icon_record_48_filled from '../assets/icons/icon_record_48_filled.svg';
import Icon_evaluate_48_line from '../assets/icons/icon_evaluate_48_line.svg';
import Icon_evaluate_48_filled from '../assets/icons/icon_evaluate_48_filled.svg';
import Icon_pdf_48_line from '../assets/icons/icon_pdf_48_line.svg';
import Icon_tag_edit_48_line from '../assets/icons/icon_tag_edit_48_line.svg';
import Icon_copy_paste_48_line from '../assets/icons/icon_copy_paste_48_line.svg';
import Icon_not_copy_paste_48_line from '../assets/icons/icon_not_copy_paste_48_line.svg';
import Icon_brightness_48_line from '../assets/icons/icon_brightness_48_line.svg';
import Icon_photo_48_line from '../assets/icons/icon_photo_48_line.svg';
import Icon_photo_48_filled from '../assets/icons/icon_photo_48_filled.svg';
import Icon_add_photo_48_line from '../assets/icons/icon_add_photo_48_line.svg';
import Icon_upload_photo_48_line from '../assets/icons/icon_upload_photo_48_line.svg';
import Icon_design_48_line from '../assets/icons/icon_design_48_line.svg';
import Icon_grid_48_line from '../assets/icons/icon_grid_48_line.svg';
import Icon_grid_48_filled from '../assets/icons/icon_grid_48_filled.svg';
import Icon_play_s_48_line from '../assets/icons/icon_play_s_48_line.svg';
import Icon_play_s_48_filled from '../assets/icons/icon_play_s_48_filled.svg';
import Icon_play_l_48_line from '../assets/icons/icon_play_l_48_line.svg';
import Icon_play_l_48_filled from '../assets/icons/icon_play_l_48_filled.svg';
import Icon_play_circle_48_line from '../assets/icons/icon_play_circle_48_line.svg';
import Icon_play_circle_48_filled from '../assets/icons/icon_play_circle_48_filled.svg';
import Icon_in_progress_48_line from '../assets/icons/icon_in_progress_48_line.svg';
import Icon_adjust_48_line from '../assets/icons/icon_adjust_48_line.svg';
import Icon_circle_48_line from '../assets/icons/icon_circle_48_line.svg';
import Icon_circle_48_filled from '../assets/icons/icon_circle_48_filled.svg';
import Icon_circle_half_48_line from '../assets/icons/icon_circle_half_48_line.svg';
import Icon_pause_48_line from '../assets/icons/icon_pause_48_line.svg';
import Icon_pause_48_filled from '../assets/icons/icon_pause_48_filled.svg';
import Icon_pause_circle_48_line from '../assets/icons/icon_pause_circle_48_line.svg';
import Icon_pause_circle_48_filled from '../assets/icons/icon_pause_circle_48_filled.svg';
import Icon_volume_mute_48_line from '../assets/icons/icon_volume_mute_48_line.svg';
import Icon_volume_off_48_line from '../assets/icons/icon_volume_off_48_line.svg';
import Icon_volume_off_48_filled from '../assets/icons/icon_volume_off_48_filled.svg';
import Icon_camera_48_line from '../assets/icons/icon_camera_48_line.svg';
import Icon_camera_48_filled from '../assets/icons/icon_camera_48_filled.svg';
import Icon_compass_48_line from '../assets/icons/icon_compass_48_line.svg';
import Icon_compass_48_filled from '../assets/icons/icon_compass_48_filled.svg';
import Icon_pin_48_line from '../assets/icons/icon_pin_48_line.svg';
import Icon_pin_48_filled from '../assets/icons/icon_pin_48_filled.svg';
import Icon_space_48_line from '../assets/icons/icon_space_48_line.svg';
import Icon_space_48_filled from '../assets/icons/icon_space_48_filled.svg';
import Icon_branch_48_line from '../assets/icons/icon_branch_48_line.svg';
import Icon_branch_48_filled from '../assets/icons/icon_branch_48_filled.svg';
import Icon_tree_48_line from '../assets/icons/icon_tree_48_line.svg';
import Icon_tree_48_filled from '../assets/icons/icon_tree_48_filled.svg';
import Icon_home_48_line from '../assets/icons/icon_home_48_line.svg';
import Icon_home_48_filled from '../assets/icons/icon_home_48_filled.svg';
import Icon_company_48_line from '../assets/icons/icon_company_48_line.svg';
import Icon_company_48_filled from '../assets/icons/icon_company_48_filled.svg';
import Icon_warehouse_48_line from '../assets/icons/icon_warehouse_48_line.svg';
import Icon_chair_48_line from '../assets/icons/icon_chair_48_line.svg';
import Icon_absence_48_line from '../assets/icons/icon_absence_48_line.svg';
import Icon_desk_48_line from '../assets/icons/icon_desk_48_line.svg';
import Icon_event_48_line from '../assets/icons/icon_event_48_line.svg';
import Icon_event_48_filled from '../assets/icons/icon_event_48_filled.svg';
import Icon_event_note_48_line from '../assets/icons/icon_event_note_48_line.svg';
import Icon_event_note_48_filled from '../assets/icons/icon_event_note_48_filled.svg';
import Icon_dropout_48_line from '../assets/icons/icon_dropout_48_line.svg';
import Icon_bell_48_line from '../assets/icons/icon_bell_48_line.svg';
import Icon_bell_48_filled from '../assets/icons/icon_bell_48_filled.svg';
import Icon_alert_48_line from '../assets/icons/icon_alert_48_line.svg';
import Icon_alert_48_filled from '../assets/icons/icon_alert_48_filled.svg';
import Icon_error_48_line from '../assets/icons/icon_error_48_line.svg';
import Icon_error_48_filled from '../assets/icons/icon_error_48_filled.svg';
import Icon_notice_48_line from '../assets/icons/icon_notice_48_line.svg';
import Icon_notice_48_filled from '../assets/icons/icon_notice_48_filled.svg';
import Icon_red_card_48_line from '../assets/icons/icon_red_card_48_line.svg';
import Icon_red_card_48_filled from '../assets/icons/icon_red_card_48_filled.svg';
import Icon_desktop_48_line from '../assets/icons/icon_desktop_48_line.svg';
import Icon_desktop_48_filled from '../assets/icons/icon_desktop_48_filled.svg';
import Icon_it_service_48_line from '../assets/icons/icon_it_service_48_line.svg';
import Icon_developer_48_line from '../assets/icons/icon_developer_48_line.svg';
import Icon_developer_48_filled from '../assets/icons/icon_developer_48_filled.svg';
import Icon_keyboard_48_line from '../assets/icons/icon_keyboard_48_line.svg';
import Icon_keyboard_48_filled from '../assets/icons/icon_keyboard_48_filled.svg';
import Icon_power_bt_48_line from '../assets/icons/icon_power_bt_48_line.svg';
import Icon_max_minimize_48_line from '../assets/icons/icon_max_minimize_48_line.svg';
import Icon_split_editor_48_filled from '../assets/icons/icon_split_editor_48_filled.svg';
import Icon_darkmode_48_line from '../assets/icons/icon_darkmode_48_line.svg';
import Icon_darkmode_48_filled from '../assets/icons/icon_darkmode_48_filled.svg';
import Icon_lightmode_48_line from '../assets/icons/icon_lightmode_48_line.svg';
import Icon_lightmode_48_filled from '../assets/icons/icon_lightmode_48_filled.svg';
import Icon_print_48_line from '../assets/icons/icon_print_48_line.svg';
import Icon_memory_48_line from '../assets/icons/icon_memory_48_line.svg';
import Icon_sdcard_48_line from '../assets/icons/icon_sdcard_48_line.svg';
import Icon_sdcard_48_filled from '../assets/icons/icon_sdcard_48_filled.svg';
import Icon_headphone_48_line from '../assets/icons/icon_headphone_48_line.svg';
import Icon_cpp_48_line from '../assets/icons/icon_cpp_48_line.svg';
import Icon_cpp_48_filled from '../assets/icons/icon_cpp_48_filled.svg';
import Icon_csharp_48_line from '../assets/icons/icon_csharp_48_line.svg';
import Icon_csharp_48_filled from '../assets/icons/icon_csharp_48_filled.svg';
import Icon_java_48_line from '../assets/icons/icon_java_48_line.svg';
import Icon_js_48_line from '../assets/icons/icon_js_48_line.svg';
import Icon_js_48_filled from '../assets/icons/icon_js_48_filled.svg';
import Icon_python_48_line from '../assets/icons/icon_python_48_line.svg';
import Icon_python_48_filled from '../assets/icons/icon_python_48_filled.svg';
import Icon_python3_48_line from '../assets/icons/icon_python3_48_line.svg';
import Icon_python3_48_filled from '../assets/icons/icon_python3_48_filled.svg';
import Icon_ip_48_line from '../assets/icons/icon_ip_48_line.svg';
import Icon_ip_48_filled from '../assets/icons/icon_ip_48_filled.svg';
import Icon_function_48_line from '../assets/icons/icon_function_48_line.svg';
import Icon_function_48_filled from '../assets/icons/icon_function_48_filled.svg';
import Icon_stdio_48_line from '../assets/icons/icon_stdio_48_line.svg';
import Icon_stdio_48_filled from '../assets/icons/icon_stdio_48_filled.svg';
import Icon_smartphone_48_line from '../assets/icons/icon_smartphone_48_line.svg';
import Icon_smartphone_48_filled from '../assets/icons/icon_smartphone_48_filled.svg';
import Icon_choice_48_line from '../assets/icons/icon_choice_48_line.svg';
import Icon_coding_18_line from '../assets/icons/icon_coding_18_line.svg';
import Icon_sound_circle_48_filled from '../assets/icons/icon_sound_circle_48_filled.svg';
import Icon_desktop_cotent_line from '../assets/icons/icon_desktop_contents_24_line.svg';
import Icon_left_24_simple from '../assets/icons/left_24_simple.svg';
import Icon_arrow_back_circle_24_fill from '../assets/icons/icon_arrow_back_circle_24_fill.svg';
import Icon_company_24_line from '../assets/icons/icon_company_24_line.svg';
import Icon_check_box_48_line from '../assets/icons/icon_check_box_48_line.svg';
import Icon_dropdown_box_24_line from '../assets/icons/icon_dropdown_box_24_line.svg';
import Icon_select_all_24_line from '../assets/icons/icon_select_all_24_line.svg';
import Icon_text_box_24_line from '../assets/icons/icon_text_box_24_line.svg';
import Icon_file_done_mono from '../assets/icons/icon_file_done_mono.svg';
import Icon_file_done_green from '../assets/icons/icon_file_done_green.svg';
import Icon_vert_align_bottom from '../assets/icons/icon_vert_align_bottom_24_line.svg';
import Icon_highlighter_24_filled from '../assets/icons/icon_highlighter_24_filled.svg';
import Icon_list_numbered_24_line from '../assets/icons/icon_list_numbered_24_line.svg';
import Icon_pin_fix_48_filled from '../assets/icons/icon_pin_fix_48_filled.svg';
import Icon_headline_32_filled from '../assets/icons/icon_headline_32_filled.svg';
import Icon_align_48_filled from '../assets/icons/icon_align_48_filled.svg';
import Icon_align_center_48_filled from '../assets/icons/icon_align_center_48_filled.svg';
import Icon_hori_align_center from '../assets/icons/icon_hori align center_24.svg';
import Icon_hori_align_left from '../assets/icons/icon_hori align left_24.svg';
import Icon_hori_align_right from '../assets/icons/icon_hori align right_24.svg';
import Icon_recruit_notice_24 from '../assets/icons/icon_recruit_notice_24.svg';
import Icon_recruit_notice_24_filled from '../assets/icons/icon_recruit notice_32_filled.svg';
import Icon_dashboard_24_line from '../assets/icons/icon_dashboard_24_line.svg';
import Icon_corner_radius_24 from '../assets/icons/icon_corner radius_24.svg';
import Icon_independent_corners_radius_24 from '../assets/icons/icon_independent corners radius_24.svg';
import Icon_document_24_line from '../assets/icons/icon_document_24_line.svg';
import Icon_input_text_32_filled from '../assets/icons/icon_input text_32_filled.svg';
import Icon_button_add_32_filled from '../assets/icons/icon_button add_32_filled.svg';
import Icon_division_line_32_filled from '../assets/icons/icon_division line_32_filled.svg';
import Icon_undo_32 from '../assets/icons/icon_undo_32.svg';
import Icon_analysis_24_line from '../assets/icons/icon_analysis_24_line.svg';
import Icon_stick_24_filled from '../assets/icons/icon_stick_24_filled.svg';
import Icon_popup_24_line from '../assets/icons/icon_popup_24_line.svg';
import Icon_brand_color_48_filled from '../assets/icons/icon_brand_color_48_filled.svg';
import Icon_brand_color_48_lined from '../assets/icons/icon_brand_color_48_line.svg';
import Icon_Accordion_48_filled from '../assets/icons/icon_accordion_48_filled.svg';
import Icon_Accordion_48_line from '../assets/icons/icon_accordion_48_line.svg';
import Icon_bubble_pending from '../assets/icons/icon_bubble_pending.svg';
import Icon_kakao from '../assets/icons/icon_kakao.svg';
import Icon_notice_board_32_filled from '../assets/icons/icon_notice_board_32_filled.svg';
import Icon_ascending_order_18 from '../assets/icons/icon_ascending_order_18.svg';
import Icon_descending_order_18 from '../assets/icons/icon_descending_order_18.svg';
import Icon_post_24_line from '../assets/icons/icon_post_24_line.svg';
import Icon_margin_24_filled from '../assets/icons/icon_margin_24_filled.svg';

export type IconTypes =
  | 'search_line'
  | 'zoom_in_line'
  | 'zoom_in_filled'
  | 'zoom_out_line'
  | 'zoom_out_filled'
  | 'setting_line'
  | 'setting_filled'
  | 'check_line'
  | 'check_circle_line'
  | 'check_circle_filled'
  | 'info_line'
  | 'info_filled'
  | 'heart_line'
  | 'heart_filled'
  | 'star_line'
  | 'star_filled'
  | 'bookmark_line'
  | 'bookmark_filled'
  | 'trending_up_line'
  | 'trending_down_line'
  | 'repair_line'
  | 'repair_filled'
  | 'lock_line'
  | 'lock_filled'
  | 'lock_2_line'
  | 'lock_2_filled'
  | 'lock_open_line'
  | 'lock_open_filled'
  | 'pending_line'
  | 'pending_filled'
  | 'manage_account_line'
  | 'manage_account_filled'
  | 'paid_line'
  | 'paid_filled'
  | 'hourglass_line'
  | 'hourglass_filled'
  | 'delete_line'
  | 'delete_filled'
  | 'time_line'
  | 'time_filled'
  | 'timer_line'
  | 'timer_filled'
  | 'average_time_line'
  | 'average_time_filled'
  | 'time_step_line'
  | 'time_step_filled'
  | 'visibility_line'
  | 'visibility_filled'
  | 'visibility_off_line'
  | 'visibility_off_filled'
  | 'chart_line'
  | 'chart_filled'
  | 'output_line'
  | 'open_in_new_line'
  | 'm_line'
  | 'm_filled'
  | 'tips_line'
  | 'tips_filled'
  | 'puzzle_line'
  | 'puzzle_filled'
  | 'rocket_line'
  | 'rocket_filled'
  | 'shield_line'
  | 'shield_filled'
  | 'filter_line'
  | 'list_line'
  | 'move_line'
  | 'list_view_line'
  | 'edit_line'
  | 'edit_filled'
  | 'write_line'
  | 'write_filled'
  | 'guide_line'
  | 'guide_filled'
  | 'title_line'
  | 'italic_line'
  | 'underlined_line'
  | 'underlined_u_line'
  | 'strikethrough_line'
  | 'strikethrough_s_line'
  | 'bold_line'
  | 'link_line'
  | 'unlink_line'
  | 'attach_file_line'
  | 'enter_line'
  | 'close_line'
  | 'clear_line'
  | 'clear_filled'
  | 'back_line'
  | 'next_line'
  | 'more_vert_line'
  | 'more_horiz_line'
  | 'arrow_left_line'
  | 'arrow_right_line'
  | 'arrow_top_line'
  | 'arrow_bottom_line'
  | 'arrow_upward_line'
  | 'arrow_downward_line'
  | 'arrow_diagonal_up_line'
  | 'arrow_diagonal_down_line'
  | 'subdirectory_line'
  | 'sort_line'
  | 'sort_filled'
  | 'sort_down_line'
  | 'sort_up_line'
  | 'refresh_line'
  | 'refresh_disabled_line'
  | 'loading_line'
  | 'reset_line'
  | 'update_line'
  | 'skip_back_line'
  | 'skip_next_line'
  | 'arrow_drop_down_line'
  | 'arrow_drop_down_filled'
  | 'arrow_drop_up_line'
  | 'arrow_drop_up_filled'
  | 'open_in_full_line'
  | 'close_fullscreen_line'
  | 'drag_handler_line'
  | 'up_s_line'
  | 'up_s_filled'
  | 'down_s_line'
  | 'down_s_filled'
  | 'up_l_line'
  | 'up_l_filled'
  | 'align_left_line'
  | 'align_center_line'
  | 'align_right_line'
  | 'person_line'
  | 'person_filled'
  | 'people_line'
  | 'people_filled'
  | 'score1_line'
  | 'score1_filled'
  | 'score2_line'
  | 'score2_filled'
  | 'score3_line'
  | 'score3_filled'
  | 'score4_line'
  | 'score4_filled'
  | 'score5_line'
  | 'score5_filled'
  | 'key_line'
  | 'key_filled'
  | 'email_line'
  | 'email_filled'
  | 'message_line'
  | 'message_filled'
  | 'marketing_line'
  | 'marketing_filled'
  | 'stock_carts_line'
  | 'construction_eng_line'
  | 'like_line'
  | 'like_filled'
  | 'insurance_line'
  | 'insurance_2_line'
  | 'science_line'
  | 'science_filled'
  | 'rnd_line'
  | 'work_line'
  | 'work_filled'
  | 'briefcase_line'
  | 'journal_line'
  | 'send_line'
  | 'send_filled'
  | 'objective_line'
  | 'key_result_line'
  | 'target_line'
  | 'medical_line'
  | 'medical_filled'
  | 'healthcare_line'
  | 'healthcare_filled'
  | 'backpack_line'
  | 'backpack_filled'
  | 'book_line'
  | 'book_filled'
  | 'graduation_line'
  | 'graduation_filled'
  | 'trophy_line'
  | 'trophy_filled'
  | 'certificate_line'
  | 'gift_line'
  | 'gift_filled'
  | 'airplane_line'
  | 'airplane_filled'
  | 'globe_line'
  | 'globe_filled'
  | 'military_line'
  | 'military_filled'
  | 'military_cap_line'
  | 'military_cap_filled'
  | 'penalty_line'
  | 'penalty_filled'
  | 'veteran_line'
  | 'veteran_filled'
  | 'disabled_line'
  | 'add_line'
  | 'add_circle_line'
  | 'add_circle_filled'
  | 'remove_line'
  | 'remove_circle_line'
  | 'remove_circle_filled'
  | 'upload_line'
  | 'download_line'
  | 'flag_line'
  | 'flag_filled'
  | 'inbox_line'
  | 'folder_line'
  | 'folder_filled'
  | 'add_folder_line'
  | 'file_line'
  | 'no_file_line'
  | 'file_done_line'
  | 'file_copy_line'
  | 'file_copy_filled'
  | 'unable_file_line'
  | 'change_code_line'
  | 'complete_edit_line'
  | 'add_file_line'
  | 'list_output_line'
  | 'result_save_line'
  | 'task_line'
  | 'task_filled'
  | 'assignment_line'
  | 'assignment_filled'
  | 'assignment_ind_line'
  | 'assignment_ind_filled'
  | 'record_line'
  | 'record_filled'
  | 'evaluate_line'
  | 'evaluate_filled'
  | 'pdf_line'
  | 'tag_edit_line'
  | 'copy_paste_line'
  | 'not_copy_paste_line'
  | 'brightness_line'
  | 'photo_line'
  | 'photo_filled'
  | 'add_photo_line'
  | 'upload_photo_line'
  | 'design_line'
  | 'grid_line'
  | 'grid_filled'
  | 'play_s_line'
  | 'play_s_filled'
  | 'play_l_line'
  | 'play_l_filled'
  | 'play_circle_line'
  | 'play_circle_filled'
  | 'in_progress_line'
  | 'adjust_line'
  | 'circle_line'
  | 'circle_filled'
  | 'circle_half_line'
  | 'pause_line'
  | 'pause_filled'
  | 'pause_circle_line'
  | 'pause_circle_filled'
  | 'volume_mute_line'
  | 'volume_off_line'
  | 'volume_off_filled'
  | 'camera_line'
  | 'camera_filled'
  | 'compass_line'
  | 'compass_filled'
  | 'pin_line'
  | 'pin_filled'
  | 'space_line'
  | 'space_filled'
  | 'branch_line'
  | 'branch_filled'
  | 'tree_line'
  | 'tree_filled'
  | 'home_line'
  | 'home_filled'
  | 'company_line'
  | 'company_filled'
  | 'warehouse_line'
  | 'chair_line'
  | 'absence_line'
  | 'desk_line'
  | 'event_line'
  | 'event_filled'
  | 'event_note_line'
  | 'event_note_filled'
  | 'dropout_line'
  | 'bell_line'
  | 'bell_filled'
  | 'alert_line'
  | 'alert_filled'
  | 'error_line'
  | 'error_filled'
  | 'notice_line'
  | 'notice_filled'
  | 'red_card_line'
  | 'red_card_filled'
  | 'desktop_line'
  | 'desktop_filled'
  | 'desktop_content_line'
  | 'it_service_line'
  | 'developer_line'
  | 'developer_filled'
  | 'keyboard_line'
  | 'keyboard_filled'
  | 'power_bt_line'
  | 'max_minimize_line'
  | 'split_editor_filled'
  | 'darkmode_line'
  | 'darkmode_filled'
  | 'lightmode_line'
  | 'lightmode_filled'
  | 'print_line'
  | 'memory_line'
  | 'sdcard_line'
  | 'sdcard_filled'
  | 'headphone_line'
  | 'cpp_line'
  | 'cpp_filled'
  | 'csharp_line'
  | 'csharp_filled'
  | 'java_line'
  | 'js_line'
  | 'js_filled'
  | 'python_line'
  | 'python_filled'
  | 'python3_line'
  | 'python3_filled'
  | 'ip_line'
  | 'ip_filled'
  | 'function_line'
  | 'function_filled'
  | 'stdio_line'
  | 'stdio_filled'
  | 'smartphone_line'
  | 'smartphone_filled'
  | 'choice_line'
  | 'icon_coding_line'
  | 'sound_circle'
  | 'left_simple'
  | 'arrow_back_circle_filled'
  | 'company_24_line'
  | 'text_box_line'
  | 'check_box_line'
  | 'select_all_line'
  | 'drop_down_box_line'
  | 'file_done_mono'
  | 'file_done_green'
  | 'vert_align_bottom'
  | 'highlighter_line'
  | 'list_numbered_line'
  | 'pin_fix_filled'
  | 'headline_48_filled'
  | 'align_48_filled'
  | 'align_center_48_filled'
  | 'hori_align_center'
  | 'hori_align_left'
  | 'hori_align_right'
  | 'recruit_notice_24'
  | 'recruit_notice_24_filled'
  | 'dashboard_24_line'
  | 'independent_corners radius_24'
  | 'corner_radius_24'
  | 'document_line'
  | 'input_text'
  | 'division'
  | 'button_add'
  | 'undo_line'
  | 'analysis_line'
  | 'stick_filled'
  | 'popup_line'
  | 'brand_color_filled'
  | 'brand_color_lined'
  | 'accordion_filled'
  | 'accordion_line'
  | 'bubble_pending'
  | 'kakao'
  | 'icon_descending_order'
  | 'icon_ascending_order'
  | 'notice_board_filled'
  | 'icon_post_line'
  | 'icon_margin_24_filled';

interface IProps {
  name: IconTypes;
  size?: number;
  color?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  onMouseDown?: MouseEventHandler<HTMLElement>;
}

const Icon: FC<IProps> = (props) => {
  const { name, size = 18, color = 'black', className, onClick, onMouseDown } = props;
  const iconProps = {
    width: size,
    height: size,
    fill: color,
    className,
    onClick,
    onMouseDown,
  };

  switch (name) {
    case 'search_line':
      return <Icon_search_48_line {...iconProps} />;
    case 'zoom_in_line':
      return <Icon_zoom_in_48_line {...iconProps} />;
    case 'zoom_in_filled':
      return <Icon_zoom_in_48_filled {...iconProps} />;
    case 'zoom_out_line':
      return <Icon_zoom_out_48_line {...iconProps} />;
    case 'zoom_out_filled':
      return <Icon_zoom_out_48_filled {...iconProps} />;
    case 'setting_line':
      return <Icon_setting_48_line {...iconProps} />;
    case 'setting_filled':
      return <Icon_setting_48_filled {...iconProps} />;
    case 'check_line':
      return <Icon_check_48_line {...iconProps} />;
    case 'check_circle_line':
      return <Icon_check_circle_48_line {...iconProps} />;
    case 'check_circle_filled':
      return <Icon_check_circle_48_filled {...iconProps} />;
    case 'info_line':
      return <Icon_info_48_line {...iconProps} />;
    case 'info_filled':
      return <Icon_info_48_filled {...iconProps} />;
    case 'heart_line':
      return <Icon_heart_48_line {...iconProps} />;
    case 'heart_filled':
      return <Icon_heart_48_filled {...iconProps} />;
    case 'star_line':
      return <Icon_star_48_line {...iconProps} />;
    case 'star_filled':
      return <Icon_star_48_filled {...iconProps} />;
    case 'bookmark_line':
      return <Icon_bookmark_48_line {...iconProps} />;
    case 'bookmark_filled':
      return <Icon_bookmark_48_filled {...iconProps} />;
    case 'trending_up_line':
      return <Icon_trending_up_48_line {...iconProps} />;
    case 'trending_down_line':
      return <Icon_trending_down_48_line {...iconProps} />;
    case 'repair_line':
      return <Icon_repair_48_line {...iconProps} />;
    case 'repair_filled':
      return <Icon_repair_48_filled {...iconProps} />;
    case 'lock_line':
      return <Icon_lock_48_line {...iconProps} />;
    case 'lock_filled':
      return <Icon_lock_48_filled {...iconProps} />;
    case 'lock_2_line':
      return <Icon_lock_2_48_line {...iconProps} />;
    case 'lock_2_filled':
      return <Icon_lock_2_48_filled {...iconProps} />;
    case 'lock_open_line':
      return <Icon_lock_open_48_line {...iconProps} />;
    case 'lock_open_filled':
      return <Icon_lock_open_48_filled {...iconProps} />;
    case 'pending_line':
      return <Icon_pending_48_line {...iconProps} />;
    case 'pending_filled':
      return <Icon_pending_48_filled {...iconProps} />;
    case 'manage_account_line':
      return <Icon_manage_account_48_line {...iconProps} />;
    case 'manage_account_filled':
      return <Icon_manage_account_48_filled {...iconProps} />;
    case 'paid_line':
      return <Icon_paid_48_line {...iconProps} />;
    case 'paid_filled':
      return <Icon_paid_48_filled {...iconProps} />;
    case 'hourglass_line':
      return <Icon_hourglass_48_line {...iconProps} />;
    case 'hourglass_filled':
      return <Icon_hourglass_48_filled {...iconProps} />;
    case 'delete_line':
      return <Icon_delete_48_line {...iconProps} />;
    case 'delete_filled':
      return <Icon_delete_48_filled {...iconProps} />;
    case 'time_line':
      return <Icon_time_48_line {...iconProps} />;
    case 'time_filled':
      return <Icon_time_48_filled {...iconProps} />;
    case 'timer_line':
      return <Icon_timer_48_line {...iconProps} />;
    case 'timer_filled':
      return <Icon_timer_48_filled {...iconProps} />;
    case 'average_time_line':
      return <Icon_average_time_48_line {...iconProps} />;
    case 'average_time_filled':
      return <Icon_average_time_48_filled {...iconProps} />;
    case 'time_step_line':
      return <Icon_time_step_48_line {...iconProps} />;
    case 'time_step_filled':
      return <Icon_time_step_48_filled {...iconProps} />;
    case 'visibility_line':
      return <Icon_visibility_48_line {...iconProps} />;
    case 'visibility_filled':
      return <Icon_visibility_48_filled {...iconProps} />;
    case 'visibility_off_line':
      return <Icon_visibility_off_48_line {...iconProps} />;
    case 'visibility_off_filled':
      return <Icon_visibility_off_48_filled {...iconProps} />;
    case 'chart_line':
      return <Icon_chart_48_line {...iconProps} />;
    case 'chart_filled':
      return <Icon_chart_48_filled {...iconProps} />;
    case 'output_line':
      return <Icon_output_48_line {...iconProps} />;
    case 'open_in_new_line':
      return <Icon_open_in_new_48_line {...iconProps} />;
    case 'm_line':
      return <Icon_m_48_line {...iconProps} />;
    case 'm_filled':
      return <Icon_m_48_filled {...iconProps} />;
    case 'tips_line':
      return <Icon_tips_48_line {...iconProps} />;
    case 'tips_filled':
      return <Icon_tips_48_filled {...iconProps} />;
    case 'puzzle_line':
      return <Icon_puzzle_48_line {...iconProps} />;
    case 'puzzle_filled':
      return <Icon_puzzle_48_filled {...iconProps} />;
    case 'rocket_line':
      return <Icon_rocket_48_line {...iconProps} />;
    case 'rocket_filled':
      return <Icon_rocket_48_filled {...iconProps} />;
    case 'shield_line':
      return <Icon_shield_48_line {...iconProps} />;
    case 'shield_filled':
      return <Icon_shield_48_filled {...iconProps} />;
    case 'filter_line':
      return <Icon_filter_48_line {...iconProps} />;
    case 'list_line':
      return <Icon_list_48_line {...iconProps} />;
    case 'move_line':
      return <Icon_move_48_line {...iconProps} />;
    case 'list_view_line':
      return <Icon_list_view_48_line {...iconProps} />;
    case 'edit_line':
      return <Icon_edit_48_line {...iconProps} />;
    case 'edit_filled':
      return <Icon_edit_48_filled {...iconProps} />;
    case 'write_line':
      return <Icon_write_48_line {...iconProps} />;
    case 'write_filled':
      return <Icon_write_48_filled {...iconProps} />;
    case 'guide_line':
      return <Icon_guide_48_line {...iconProps} />;
    case 'guide_filled':
      return <Icon_guide_48_filled {...iconProps} />;
    case 'title_line':
      return <Icon_title_48_line {...iconProps} />;
    case 'italic_line':
      return <Icon_italic_48_line {...iconProps} />;
    case 'underlined_line':
      return <Icon_underlined_48_line {...iconProps} />;
    case 'underlined_u_line':
      return <Icon_underlined_u_48_line {...iconProps} />;
    case 'strikethrough_line':
      return <Icon_strikethrough_48_line {...iconProps} />;
    case 'strikethrough_s_line':
      return <Icon_strikethrough_s_48_line {...iconProps} />;
    case 'bold_line':
      return <Icon_bold_48_line {...iconProps} />;
    case 'link_line':
      return <Icon_link_48_line {...iconProps} />;
    case 'unlink_line':
      return <Icon_unlink_48_line {...iconProps} />;
    case 'attach_file_line':
      return <Icon_attach_file_48_line {...iconProps} />;
    case 'enter_line':
      return <Icon_enter_48_line {...iconProps} />;
    case 'close_line':
      return <Icon_close_48_line {...iconProps} />;
    case 'clear_line':
      return <Icon_clear_48_line {...iconProps} />;
    case 'clear_filled':
      return <Icon_clear_48_filled {...iconProps} />;
    case 'back_line':
      return <Icon_back_48_line {...iconProps} />;
    case 'next_line':
      return <Icon_next_48_line {...iconProps} />;
    case 'more_vert_line':
      return <Icon_more_vert_24_line {...iconProps} />;
    case 'more_horiz_line':
      return <Icon_more_horiz_48_line {...iconProps} />;
    case 'arrow_left_line':
      return <Icon_arrow_left_48_line {...iconProps} />;
    case 'arrow_right_line':
      return <Icon_arrow_right_48_line {...iconProps} />;
    case 'arrow_top_line':
      return <Icon_arrow_top_48_line {...iconProps} />;
    case 'arrow_bottom_line':
      return <Icon_arrow_bottom_48_line {...iconProps} />;
    case 'arrow_upward_line':
      return <Icon_arrow_upward_48_line {...iconProps} />;
    case 'arrow_downward_line':
      return <Icon_arrow_downward_48_line {...iconProps} />;
    case 'arrow_diagonal_up_line':
      return <Icon_arrow_diagonal_up_48_line {...iconProps} />;
    case 'arrow_diagonal_down_line':
      return <Icon_arrow_diagonal_down_48_line {...iconProps} />;
    case 'subdirectory_line':
      return <Icon_subdirectory_48_line {...iconProps} />;
    case 'sort_line':
      return <Icon_sort_48_line {...iconProps} />;
    case 'sort_filled':
      return <Icon_sort_48_filled {...iconProps} />;
    case 'sort_down_line':
      return <Icon_sort_down_48_line {...iconProps} />;
    case 'sort_up_line':
      return <Icon_sort_up_48_line {...iconProps} />;
    case 'refresh_line':
      return <Icon_refresh_48_line {...iconProps} />;
    case 'refresh_disabled_line':
      return <Icon_refresh_disabled_48_line {...iconProps} />;
    case 'loading_line':
      return <Icon_loading_48_line {...iconProps} />;
    case 'reset_line':
      return <Icon_reset_48_line {...iconProps} />;
    case 'update_line':
      return <Icon_update_48_line {...iconProps} />;
    case 'skip_back_line':
      return <Icon_skip_back_48_line {...iconProps} />;
    case 'skip_next_line':
      return <Icon_skip_next_48_line {...iconProps} />;
    case 'arrow_drop_down_line':
      return <Icon_arrow_drop_down_48_line {...iconProps} />;
    case 'arrow_drop_down_filled':
      return <Icon_arrow_drop_down_48_filled {...iconProps} />;
    case 'arrow_drop_up_line':
      return <Icon_arrow_drop_up_48_line {...iconProps} />;
    case 'arrow_drop_up_filled':
      return <Icon_arrow_drop_up_48_filled {...iconProps} />;
    case 'open_in_full_line':
      return <Icon_open_in_full_48_line {...iconProps} />;
    case 'close_fullscreen_line':
      return <Icon_close_fullscreen_48_line {...iconProps} />;
    case 'drag_handler_line':
      return <Icon_drag_handler_48_line {...iconProps} />;
    case 'up_s_line':
      return <Icon_up_s_48_line {...iconProps} />;
    case 'up_s_filled':
      return <Icon_up_s_48_filled {...iconProps} />;
    case 'down_s_line':
      return <Icon_down_s_48_line {...iconProps} />;
    case 'down_s_filled':
      return <Icon_down_s_48_filled {...iconProps} />;
    case 'up_l_line':
      return <Icon_up_l_48_line {...iconProps} />;
    case 'up_l_filled':
      return <Icon_up_l_48_filled {...iconProps} />;
    case 'align_left_line':
      return <Icon_align_left_48_line {...iconProps} />;
    case 'align_center_line':
      return <Icon_align_center_48_line {...iconProps} />;
    case 'align_right_line':
      return <Icon_align_right_48_line {...iconProps} />;
    case 'hori_align_center':
      return <Icon_hori_align_center {...iconProps} />;
    case 'hori_align_left':
      return <Icon_hori_align_left {...iconProps} />;
    case 'hori_align_right':
      return <Icon_hori_align_right {...iconProps} />;
    case 'person_line':
      return <Icon_person_48_line {...iconProps} />;
    case 'person_filled':
      return <Icon_person_48_filled {...iconProps} />;
    case 'people_line':
      return <Icon_people_48_line {...iconProps} />;
    case 'people_filled':
      return <Icon_people_48_filled {...iconProps} />;
    case 'score1_line':
      return <Icon_score1_48_line {...iconProps} />;
    case 'score1_filled':
      return <Icon_score1_48_filled {...iconProps} />;
    case 'score2_line':
      return <Icon_score2_48_line {...iconProps} />;
    case 'score2_filled':
      return <Icon_score2_48_filled {...iconProps} />;
    case 'score3_line':
      return <Icon_score3_48_line {...iconProps} />;
    case 'score3_filled':
      return <Icon_score3_48_filled {...iconProps} />;
    case 'score4_line':
      return <Icon_score4_48_line {...iconProps} />;
    case 'score4_filled':
      return <Icon_score4_48_filled {...iconProps} />;
    case 'score5_line':
      return <Icon_score5_48_line {...iconProps} />;
    case 'score5_filled':
      return <Icon_score5_48_filled {...iconProps} />;
    case 'key_line':
      return <Icon_key_48_line {...iconProps} />;
    case 'key_filled':
      return <Icon_key_48_filled {...iconProps} />;
    case 'email_line':
      return <Icon_email_48_line {...iconProps} />;
    case 'email_filled':
      return <Icon_email_48_filled {...iconProps} />;
    case 'message_line':
      return <Icon_message_48_line {...iconProps} />;
    case 'message_filled':
      return <Icon_message_48_filled {...iconProps} />;
    case 'marketing_line':
      return <Icon_marketing_48_line {...iconProps} />;
    case 'marketing_filled':
      return <Icon_marketing_48_filled {...iconProps} />;
    case 'stock_carts_line':
      return <Icon_stock_carts_48_line {...iconProps} />;
    case 'construction_eng_line':
      return <Icon_construction_eng_48_line {...iconProps} />;
    case 'like_line':
      return <Icon_like_48_line {...iconProps} />;
    case 'like_filled':
      return <Icon_like_48_filled {...iconProps} />;
    case 'insurance_line':
      return <Icon_insurance_48_line {...iconProps} />;
    case 'insurance_2_line':
      return <Icon_insurance_2_48_line {...iconProps} />;
    case 'science_line':
      return <Icon_science_48_line {...iconProps} />;
    case 'science_filled':
      return <Icon_science_48_filled {...iconProps} />;
    case 'rnd_line':
      return <Icon_rnd_48_line {...iconProps} />;
    case 'work_line':
      return <Icon_work_48_line {...iconProps} />;
    case 'work_filled':
      return <Icon_work_48_filled {...iconProps} />;
    case 'briefcase_line':
      return <Icon_briefcase_48_line {...iconProps} />;
    case 'journal_line':
      return <Icon_journal_48_line {...iconProps} />;
    case 'send_line':
      return <Icon_send_48_line {...iconProps} />;
    case 'send_filled':
      return <Icon_send_48_filled {...iconProps} />;
    case 'objective_line':
      return <Icon_objective_48_line {...iconProps} />;
    case 'key_result_line':
      return <Icon_key_result_48_line {...iconProps} />;
    case 'target_line':
      return <Icon_target_48_line {...iconProps} />;
    case 'medical_line':
      return <Icon_medical_48_line {...iconProps} />;
    case 'medical_filled':
      return <Icon_medical_48_filled {...iconProps} />;
    case 'healthcare_line':
      return <Icon_healthcare_48_line {...iconProps} />;
    case 'healthcare_filled':
      return <Icon_healthcare_48_filled {...iconProps} />;
    case 'backpack_line':
      return <Icon_backpack_48_line {...iconProps} />;
    case 'backpack_filled':
      return <Icon_backpack_48_filled {...iconProps} />;
    case 'book_line':
      return <Icon_book_48_line {...iconProps} />;
    case 'book_filled':
      return <Icon_book_48_filled {...iconProps} />;
    case 'graduation_line':
      return <Icon_graduation_48_line {...iconProps} />;
    case 'graduation_filled':
      return <Icon_graduation_48_filled {...iconProps} />;
    case 'trophy_line':
      return <Icon_trophy_48_line {...iconProps} />;
    case 'trophy_filled':
      return <Icon_trophy_48_filled {...iconProps} />;
    case 'certificate_line':
      return <Icon_certificate_48_line {...iconProps} />;
    case 'gift_line':
      return <Icon_gift_48_line {...iconProps} />;
    case 'gift_filled':
      return <Icon_gift_48_filled {...iconProps} />;
    case 'airplane_line':
      return <Icon_airplane_48_line {...iconProps} />;
    case 'airplane_filled':
      return <Icon_airplane_48_filled {...iconProps} />;
    case 'globe_line':
      return <Icon_globe_48_line {...iconProps} />;
    case 'globe_filled':
      return <Icon_globe_48_filled {...iconProps} />;
    case 'military_line':
      return <Icon_military_48_line {...iconProps} />;
    case 'military_filled':
      return <Icon_military_48_filled {...iconProps} />;
    case 'military_cap_line':
      return <Icon_military_cap_48_line {...iconProps} />;
    case 'military_cap_filled':
      return <Icon_military_cap_48_filled {...iconProps} />;
    case 'penalty_line':
      return <Icon_penalty_48_line {...iconProps} />;
    case 'penalty_filled':
      return <Icon_penalty_48_filled {...iconProps} />;
    case 'veteran_line':
      return <Icon_veteran_48_line {...iconProps} />;
    case 'veteran_filled':
      return <Icon_veteran_48_filled {...iconProps} />;
    case 'disabled_line':
      return <Icon_disabled_48_line {...iconProps} />;
    case 'add_line':
      return <Icon_add_48_line {...iconProps} />;
    case 'add_circle_line':
      return <Icon_add_circle_48_line {...iconProps} />;
    case 'add_circle_filled':
      return <Icon_add_circle_48_filled {...iconProps} />;
    case 'remove_line':
      return <Icon_remove_48_line {...iconProps} />;
    case 'remove_circle_line':
      return <Icon_remove_circle_48_line {...iconProps} />;
    case 'remove_circle_filled':
      return <Icon_remove_circle_48_filled {...iconProps} />;
    case 'upload_line':
      return <Icon_upload_48_line {...iconProps} />;
    case 'download_line':
      return <Icon_download_48_line {...iconProps} />;
    case 'flag_line':
      return <Icon_flag_48_line {...iconProps} />;
    case 'flag_filled':
      return <Icon_flag_48_filled {...iconProps} />;
    case 'inbox_line':
      return <Icon_inbox_48_line {...iconProps} />;
    case 'folder_line':
      return <Icon_folder_48_line {...iconProps} />;
    case 'folder_filled':
      return <Icon_folder_48_filled {...iconProps} />;
    case 'add_folder_line':
      return <Icon_add_folder_48_line {...iconProps} />;
    case 'file_line':
      return <Icon_file_48_line {...iconProps} />;
    case 'no_file_line':
      return <Icon_no_file_48_line {...iconProps} />;
    case 'file_done_line':
      return <Icon_file_done_48_line {...iconProps} />;
    case 'file_copy_line':
      return <Icon_file_copy_48_line {...iconProps} />;
    case 'file_copy_filled':
      return <Icon_file_copy_48_filled {...iconProps} />;
    case 'unable_file_line':
      return <Icon_unable_file_48_line {...iconProps} />;
    case 'change_code_line':
      return <Icon_change_code_48_line {...iconProps} />;
    case 'complete_edit_line':
      return <Icon_complete_edit_48_line {...iconProps} />;
    case 'add_file_line':
      return <Icon_add_file_48_line {...iconProps} />;
    case 'list_output_line':
      return <Icon_list_output_48_line {...iconProps} />;
    case 'result_save_line':
      return <Icon_result_save_48_line {...iconProps} />;
    case 'task_line':
      return <Icon_task_48_line {...iconProps} />;
    case 'task_filled':
      return <Icon_task_48_filled {...iconProps} />;
    case 'assignment_line':
      return <Icon_assignment_48_line {...iconProps} />;
    case 'assignment_filled':
      return <Icon_assignment_48_filled {...iconProps} />;
    case 'assignment_ind_line':
      return <Icon_assignment_ind_48_line {...iconProps} />;
    case 'assignment_ind_filled':
      return <Icon_assignment_ind_48_filled {...iconProps} />;
    case 'record_line':
      return <Icon_record_48_line {...iconProps} />;
    case 'record_filled':
      return <Icon_record_48_filled {...iconProps} />;
    case 'evaluate_line':
      return <Icon_evaluate_48_line {...iconProps} />;
    case 'evaluate_filled':
      return <Icon_evaluate_48_filled {...iconProps} />;
    case 'pdf_line':
      return <Icon_pdf_48_line {...iconProps} />;
    case 'tag_edit_line':
      return <Icon_tag_edit_48_line {...iconProps} />;
    case 'copy_paste_line':
      return <Icon_copy_paste_48_line {...iconProps} />;
    case 'not_copy_paste_line':
      return <Icon_not_copy_paste_48_line {...iconProps} />;
    case 'brightness_line':
      return <Icon_brightness_48_line {...iconProps} />;
    case 'photo_line':
      return <Icon_photo_48_line {...iconProps} />;
    case 'photo_filled':
      return <Icon_photo_48_filled {...iconProps} />;
    case 'add_photo_line':
      return <Icon_add_photo_48_line {...iconProps} />;
    case 'upload_photo_line':
      return <Icon_upload_photo_48_line {...iconProps} />;
    case 'design_line':
      return <Icon_design_48_line {...iconProps} />;
    case 'grid_line':
      return <Icon_grid_48_line {...iconProps} />;
    case 'grid_filled':
      return <Icon_grid_48_filled {...iconProps} />;
    case 'play_s_line':
      return <Icon_play_s_48_line {...iconProps} />;
    case 'play_s_filled':
      return <Icon_play_s_48_filled {...iconProps} />;
    case 'play_l_line':
      return <Icon_play_l_48_line {...iconProps} />;
    case 'play_l_filled':
      return <Icon_play_l_48_filled {...iconProps} />;
    case 'play_circle_line':
      return <Icon_play_circle_48_line {...iconProps} />;
    case 'play_circle_filled':
      return <Icon_play_circle_48_filled {...iconProps} />;
    case 'in_progress_line':
      return <Icon_in_progress_48_line {...iconProps} />;
    case 'adjust_line':
      return <Icon_adjust_48_line {...iconProps} />;
    case 'circle_line':
      return <Icon_circle_48_line {...iconProps} />;
    case 'circle_filled':
      return <Icon_circle_48_filled {...iconProps} />;
    case 'circle_half_line':
      return <Icon_circle_half_48_line {...iconProps} />;
    case 'pause_line':
      return <Icon_pause_48_line {...iconProps} />;
    case 'pause_filled':
      return <Icon_pause_48_filled {...iconProps} />;
    case 'pause_circle_line':
      return <Icon_pause_circle_48_line {...iconProps} />;
    case 'pause_circle_filled':
      return <Icon_pause_circle_48_filled {...iconProps} />;
    case 'volume_mute_line':
      return <Icon_volume_mute_48_line {...iconProps} />;
    case 'volume_off_line':
      return <Icon_volume_off_48_line {...iconProps} />;
    case 'volume_off_filled':
      return <Icon_volume_off_48_filled {...iconProps} />;
    case 'camera_line':
      return <Icon_camera_48_line {...iconProps} />;
    case 'camera_filled':
      return <Icon_camera_48_filled {...iconProps} />;
    case 'compass_line':
      return <Icon_compass_48_line {...iconProps} />;
    case 'compass_filled':
      return <Icon_compass_48_filled {...iconProps} />;
    case 'pin_line':
      return <Icon_pin_48_line {...iconProps} />;
    case 'pin_filled':
      return <Icon_pin_48_filled {...iconProps} />;
    case 'space_line':
      return <Icon_space_48_line {...iconProps} />;
    case 'space_filled':
      return <Icon_space_48_filled {...iconProps} />;
    case 'branch_line':
      return <Icon_branch_48_line {...iconProps} />;
    case 'branch_filled':
      return <Icon_branch_48_filled {...iconProps} />;
    case 'tree_line':
      return <Icon_tree_48_line {...iconProps} />;
    case 'tree_filled':
      return <Icon_tree_48_filled {...iconProps} />;
    case 'home_line':
      return <Icon_home_48_line {...iconProps} />;
    case 'home_filled':
      return <Icon_home_48_filled {...iconProps} />;
    case 'company_line':
      return <Icon_company_48_line {...iconProps} />;
    case 'company_filled':
      return <Icon_company_48_filled {...iconProps} />;
    case 'warehouse_line':
      return <Icon_warehouse_48_line {...iconProps} />;
    case 'chair_line':
      return <Icon_chair_48_line {...iconProps} />;
    case 'absence_line':
      return <Icon_absence_48_line {...iconProps} />;
    case 'desk_line':
      return <Icon_desk_48_line {...iconProps} />;
    case 'event_line':
      return <Icon_event_48_line {...iconProps} />;
    case 'event_filled':
      return <Icon_event_48_filled {...iconProps} />;
    case 'event_note_line':
      return <Icon_event_note_48_line {...iconProps} />;
    case 'event_note_filled':
      return <Icon_event_note_48_filled {...iconProps} />;
    case 'dropout_line':
      return <Icon_dropout_48_line {...iconProps} />;
    case 'bell_line':
      return <Icon_bell_48_line {...iconProps} />;
    case 'bell_filled':
      return <Icon_bell_48_filled {...iconProps} />;
    case 'alert_line':
      return <Icon_alert_48_line {...iconProps} />;
    case 'alert_filled':
      return <Icon_alert_48_filled {...iconProps} />;
    case 'error_line':
      return <Icon_error_48_line {...iconProps} />;
    case 'error_filled':
      return <Icon_error_48_filled {...iconProps} />;
    case 'notice_line':
      return <Icon_notice_48_line {...iconProps} />;
    case 'notice_filled':
      return <Icon_notice_48_filled {...iconProps} />;
    case 'red_card_line':
      return <Icon_red_card_48_line {...iconProps} />;
    case 'red_card_filled':
      return <Icon_red_card_48_filled {...iconProps} />;
    case 'desktop_content_line':
      return <Icon_desktop_cotent_line {...iconProps} />;
    case 'desktop_line':
      return <Icon_desktop_48_line {...iconProps} />;
    case 'desktop_filled':
      return <Icon_desktop_48_filled {...iconProps} />;
    case 'it_service_line':
      return <Icon_it_service_48_line {...iconProps} />;
    case 'developer_line':
      return <Icon_developer_48_line {...iconProps} />;
    case 'developer_filled':
      return <Icon_developer_48_filled {...iconProps} />;
    case 'keyboard_line':
      return <Icon_keyboard_48_line {...iconProps} />;
    case 'keyboard_filled':
      return <Icon_keyboard_48_filled {...iconProps} />;
    case 'power_bt_line':
      return <Icon_power_bt_48_line {...iconProps} />;
    case 'max_minimize_line':
      return <Icon_max_minimize_48_line {...iconProps} />;
    case 'split_editor_filled':
      return <Icon_split_editor_48_filled {...iconProps} />;
    case 'darkmode_line':
      return <Icon_darkmode_48_line {...iconProps} />;
    case 'darkmode_filled':
      return <Icon_darkmode_48_filled {...iconProps} />;
    case 'lightmode_line':
      return <Icon_lightmode_48_line {...iconProps} />;
    case 'lightmode_filled':
      return <Icon_lightmode_48_filled {...iconProps} />;
    case 'print_line':
      return <Icon_print_48_line {...iconProps} />;
    case 'memory_line':
      return <Icon_memory_48_line {...iconProps} />;
    case 'sdcard_line':
      return <Icon_sdcard_48_line {...iconProps} />;
    case 'sdcard_filled':
      return <Icon_sdcard_48_filled {...iconProps} />;
    case 'headphone_line':
      return <Icon_headphone_48_line {...iconProps} />;
    case 'cpp_line':
      return <Icon_cpp_48_line {...iconProps} />;
    case 'cpp_filled':
      return <Icon_cpp_48_filled {...iconProps} />;
    case 'csharp_line':
      return <Icon_csharp_48_line {...iconProps} />;
    case 'csharp_filled':
      return <Icon_csharp_48_filled {...iconProps} />;
    case 'java_line':
      return <Icon_java_48_line {...iconProps} />;
    case 'js_line':
      return <Icon_js_48_line {...iconProps} />;
    case 'js_filled':
      return <Icon_js_48_filled {...iconProps} />;
    case 'python_line':
      return <Icon_python_48_line {...iconProps} />;
    case 'python_filled':
      return <Icon_python_48_filled {...iconProps} />;
    case 'python3_line':
      return <Icon_python3_48_line {...iconProps} />;
    case 'python3_filled':
      return <Icon_python3_48_filled {...iconProps} />;
    case 'ip_line':
      return <Icon_ip_48_line {...iconProps} />;
    case 'ip_filled':
      return <Icon_ip_48_filled {...iconProps} />;
    case 'function_line':
      return <Icon_function_48_line {...iconProps} />;
    case 'function_filled':
      return <Icon_function_48_filled {...iconProps} />;
    case 'stdio_line':
      return <Icon_stdio_48_line {...iconProps} />;
    case 'stdio_filled':
      return <Icon_stdio_48_filled {...iconProps} />;
    case 'smartphone_line':
      return <Icon_smartphone_48_line {...iconProps} />;
    case 'smartphone_filled':
      return <Icon_smartphone_48_filled {...iconProps} />;
    case 'choice_line':
      return <Icon_choice_48_line {...iconProps} />;
    case 'icon_coding_line':
      return <Icon_coding_18_line {...iconProps} />;
    case 'sound_circle':
      return <Icon_sound_circle_48_filled {...iconProps} />;
    case 'left_simple':
      return <Icon_left_24_simple {...iconProps} />;
    case 'arrow_back_circle_filled':
      return <Icon_arrow_back_circle_24_fill {...iconProps} />;
    case 'company_24_line':
      return <Icon_company_24_line {...iconProps} />;
    case 'text_box_line':
      return <Icon_text_box_24_line {...iconProps} />;
    case 'check_box_line':
      return <Icon_check_box_48_line {...iconProps} />;
    case 'select_all_line':
      return <Icon_select_all_24_line {...iconProps} />;
    case 'drop_down_box_line':
      return <Icon_dropdown_box_24_line {...iconProps} />;
    case 'file_done_mono':
      return <Icon_file_done_mono {...iconProps} />;
    case 'file_done_green':
      return <Icon_file_done_green {...iconProps} />;
    case 'vert_align_bottom':
      return <Icon_vert_align_bottom {...iconProps} />;
    case 'highlighter_line':
      return <Icon_highlighter_24_filled {...iconProps} />;
    case 'list_numbered_line':
      return <Icon_list_numbered_24_line {...iconProps} />;
    case 'pin_fix_filled':
      return <Icon_pin_fix_48_filled {...iconProps} />;
    case 'align_48_filled':
      return <Icon_align_48_filled {...iconProps} />;
    case 'align_center_48_filled':
      return <Icon_align_center_48_filled {...iconProps} />;
    case 'headline_48_filled':
      return <Icon_headline_32_filled {...iconProps} />;
    case 'recruit_notice_24':
      return <Icon_recruit_notice_24 {...iconProps} />;
    case 'recruit_notice_24_filled':
      return <Icon_recruit_notice_24_filled {...iconProps} />;
    case 'dashboard_24_line':
      return <Icon_dashboard_24_line {...iconProps} />;
    case 'corner_radius_24':
      return <Icon_corner_radius_24 {...iconProps} />;
    case 'independent_corners radius_24':
      return <Icon_independent_corners_radius_24 {...iconProps} />;
    case 'document_line':
      return <Icon_document_24_line {...iconProps} />;
    case 'popup_line':
      return <Icon_popup_24_line {...iconProps} />;
    case 'input_text':
      return <Icon_input_text_32_filled {...iconProps} />;
    case 'division':
      return <Icon_division_line_32_filled {...iconProps} />;
    case 'button_add':
      return <Icon_button_add_32_filled {...iconProps} />;
    case 'undo_line':
      return <Icon_undo_32 {...iconProps} />;
    case 'analysis_line':
      return <Icon_analysis_24_line {...iconProps} />;
    case 'stick_filled':
      return <Icon_stick_24_filled {...iconProps} />;
    case 'brand_color_lined':
      return <Icon_brand_color_48_lined {...iconProps} />;
    case 'brand_color_filled':
      return <Icon_brand_color_48_filled {...iconProps} />;
    case 'accordion_filled':
      return <Icon_Accordion_48_filled {...iconProps} />;
    case 'accordion_line':
      return <Icon_Accordion_48_line {...iconProps} />;
    case 'kakao':
      return <Icon_kakao {...iconProps} />;
    case 'bubble_pending':
      return <Icon_bubble_pending {...iconProps} />;
    case 'notice_board_filled':
      return <Icon_notice_board_32_filled {...iconProps} />;
    case 'icon_descending_order':
      return <Icon_descending_order_18 {...iconProps} />;
    case 'icon_ascending_order':
      return <Icon_ascending_order_18 {...iconProps} />;
    case 'icon_post_line':
      return <Icon_post_24_line {...iconProps} />;
    case 'icon_margin_24_filled':
      return <Icon_margin_24_filled {...iconProps} />;
    default:
      return <></>;
  }
};

export default Icon;
