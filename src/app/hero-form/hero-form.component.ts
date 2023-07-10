import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.less']
})
export class HeroFormComponent {


  powers = [
    'Really smart',
    'Super Flexible',
    'Super Hot',
    'Weather Changer'
  ];

  model = new Hero(
    18,
    'Dr. IQ',
    this.powers[0],
    'Chuck Overstreet'
  );

  newHero(): void {
    this.model = new Hero(42, '', '');
  }

  submitted = false;

  onSubmit() { this.submitted = true }
}
