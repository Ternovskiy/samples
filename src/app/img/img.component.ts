import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgComponent {

}
