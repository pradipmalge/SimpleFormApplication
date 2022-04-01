import { TestBed } from '@angular/core/testing';
import { UserDetails } from '../model/user-details';

import { UserDetailsService } from './user-details.service';

describe('UserDetailsService', () => {
  let service: UserDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDetailsService);
  });

  it('should post valid user details', () => {
    var userDetails = new UserDetails("ProxyFirstName", "ProxyLastName");
    service.saveUserDetails(userDetails).subscribe(result => {
      expect(result.firstname).toEqual("ProxyFirstName");
      expect(result.lastname).toEqual("ProxyLastName");
    });
  });
});
