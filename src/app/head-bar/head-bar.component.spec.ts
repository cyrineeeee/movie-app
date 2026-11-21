import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeadBarComponent } from './head-bar.component';

describe('HeadBarComponent', () => {
  let component: HeadBarComponent;
  let fixture: ComponentFixture<HeadBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeadBarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
