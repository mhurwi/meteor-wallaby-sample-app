import React, { Component } from 'react';

export function WidgetItem({ name }) {

  return (
    <div>
      <h3>Widget Item</h3>
      <p className="widget-name">{name ? name : 'crabapple'}</p>
    </div>
  );
}
