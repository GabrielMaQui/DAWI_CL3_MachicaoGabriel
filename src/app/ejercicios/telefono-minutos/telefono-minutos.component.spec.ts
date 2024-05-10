import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonoMinutosComponent } from './telefono-minutos.component';

describe('TelefonoMinutosComponent', () => {
  let component: TelefonoMinutosComponent;
  let fixture: ComponentFixture<TelefonoMinutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelefonoMinutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelefonoMinutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
