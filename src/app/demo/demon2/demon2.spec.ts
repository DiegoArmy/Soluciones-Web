import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Demon2 } from './demon2';

describe('Demon2', () => {
  let component: Demon2;
  let fixture: ComponentFixture<Demon2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demon2],
    }).compileComponents();

    fixture = TestBed.createComponent(Demon2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
