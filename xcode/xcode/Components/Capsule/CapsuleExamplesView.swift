
import SwiftUI

struct CapsuleExamplesView: View {
    var body: some View {
        List {
            Capsule()
                .fill(Color.green)
                .frame(width: 150, height: 80)
                .navigationTitle("Default Capsule")
            
            Capsule()
                .stroke(Color.yellow, lineWidth: 4)
                .frame(width: 150, height: 80)
                .navigationTitle("Stroked Capsule")
            
            Capsule(style: .continuous)
                .fill(Color.teal)
                .frame(width: 80, height: 150)
                .navigationTitle("Vertical Capsule")
        }
        .navigationTitle("Capsule Examples")
    }
}

struct CapsuleExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        CapsuleExamplesView()
    }
}
