# frozen_string_literal: true

class AddThreadingEnabledToChatChannels < ActiveRecord::Migration[7.0]
  def change
    add_column :chat_channels, :threading_enabled, :boolean, default: false, null: false
  end
end
