import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';
import { Category } from 'src/app/core/models/category';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {

  listCategory: Array<Category> = [];
  titleCategory = '';
  idCategory = '';
  checkEdit: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.render();
  }

  btnAdd(){
    this.checkEdit = false;
  }

  btnEdit(id){
    this.checkEdit = true;
    this.idCategory = id;
  }

  render() {
    this.categoryService.getAllCategory().subscribe(res => {
      this.listCategory = res;
    }, err => {
      console.log(err);
    })
  }

  addOrUpdate() {
    if (this.checkEdit) {
      this.updateCategory(this.idCategory, this.titleCategory);
    } else {
      console.log(this.titleCategory);
      this.addCategory();
    }
  }

  addCategory() {
    let category = new Category(null, this.titleCategory);
    this.categoryService.addCategory(category).subscribe(res => {
      console.log(res);
      this.toastr.success(`Thêm thể loại ${this.titleCategory} thành công`)
      this.render();
    }, err => {
      console.log(err);
    })
  }

  updateCategory(id, title) {
    let category: Category = new Category(id, title);
    this.categoryService.updateCategory(category).subscribe(res => {
      console.log(res);
      this.toastr.success(`Sửa thể loại ${this.titleCategory} thành công`)
      this.render();
    }, err => {
      console.log(err);
    })
  }

  deleteCategory(id, title) {
    this.categoryService.deleteCategory(id).subscribe(res => {
      console.log(res);
      this.toastr.success(`Xóa thể loại ${title} thành công!`);
      this.render();
    }, err => {
      console.log(err);
    })
  }

  confirmDel(id, title) {
    Swal.fire({
      title: `Bạn có chắc chắn muốn xóa thể loại ${title}?`,
      text: 'Xóa sẽ không thể khôi phục lại!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'XÓA',
      cancelButtonText: 'HỦY'
    }).then((result) => {
      if (result.value) {
        this.deleteCategory(id, title);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.toastr.error('Hủy xóa!');
        this.render();
      }
    })
  }
}