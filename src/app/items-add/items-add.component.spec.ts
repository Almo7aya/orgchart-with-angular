import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsAddComponent } from './items-add.component';

describe('ItemsAddComponent', () => {
  let component: ItemsAddComponent;
  let fixture: ComponentFixture<ItemsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
