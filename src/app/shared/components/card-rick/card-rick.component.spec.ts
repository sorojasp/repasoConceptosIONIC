import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardRickComponent } from './card-rick.component';

describe('CardRickComponent', () => {
  let component: CardRickComponent;
  let fixture: ComponentFixture<CardRickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRickComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardRickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
