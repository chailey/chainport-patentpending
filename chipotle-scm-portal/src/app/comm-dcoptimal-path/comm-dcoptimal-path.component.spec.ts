import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommDcoptimalPathComponent } from './comm-dcoptimal-path.component';

describe('CommDcoptimalPathComponent', () => {
  let component: CommDcoptimalPathComponent;
  let fixture: ComponentFixture<CommDcoptimalPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommDcoptimalPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommDcoptimalPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
