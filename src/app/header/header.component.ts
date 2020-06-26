import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private _overlayContainer: OverlayContainer
  ) {
    if (!this._overlayContainer.getContainerElement().classList.contains('default-theme')
        || !this._overlayContainer.getContainerElement().classList.contains('dark-theme')) {
      this._overlayContainer.getContainerElement().classList.add('default-theme');
    }
  }

  ngOnInit(): void {
  }

  public toggleTheme(): void {
    if (this._overlayContainer.getContainerElement().classList.contains('default-theme'))
      this._overlayContainer.getContainerElement().classList.replace('default-theme', 'dark-theme');
    else
      this._overlayContainer.getContainerElement().classList.replace('dark-theme', 'default-theme');
  }
}
